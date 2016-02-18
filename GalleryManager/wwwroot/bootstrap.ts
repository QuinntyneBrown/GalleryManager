/// <reference path="../typings/tsd.d.ts" />

import { BrandActionCreator, GalleryActionCreator, PhotoActionCreator, TagActionCreator, UserActionCreator } from "./actions";

import { BrandService, GalleryService, PhotoService, TagService, UserService } from "./services";

import {
GalleryListComponent,
GalleryEditorComponent,
HeaderComponent,
HomeComponent,
AppComponent,
LoginComponent,
PhotoUploadComponent
} from "./components";



import { addBrandReducer, addGalleryReducer, userLoggedInReducer } from "./reducers";


var app = (<any>angular.module("galleryManagerApp", [
    "addOrUpdate",
    "apiEndpoint",
    "authInterceptor",
    "fetch",
    "formEncode",
    "invokeAsync",
    "localStorageManager",
    "loginRedirect",
    "routeResolver",
    "routeWhenExtension",
    "safeDigest",
    "store"
]));

app.service("brandService", ["$q", "apiEndpoint", "fetch", BrandService]);
app.service("galleryService", ["$q", "apiEndpoint", "fetch", GalleryService]);
app.service("photoService", ["$q", "apiEndpoint", "fetch", PhotoService]);
app.service("tagService", ["$q", "apiEndpoint", "fetch", TagService]);
app.service("userService", ["$q", "apiEndpoint", "fetch", "formEncode", UserService]);

app.service("brandActionCreator", ["brandService", "dispatcher", "guid", BrandActionCreator]);
app.service("galleryActionCreator", ["dispatcher", "galleryService", "guid", GalleryActionCreator]);
app.service("tagActionCreator", ["tagService", "dispatcher", "guid", TagActionCreator]);
app.service("userActionCreator", ["dispatcher", "guid", "userService", UserActionCreator]);
app.service("photoActionCreator", ["photoService", "dispatcher", "guid", PhotoActionCreator]);

app.component({
    templateUrl: "wwwroot/components/app.html",
    component: AppComponent,
    selector: "app"
});

app.component({
    templateUrl: "wwwroot/components/login.html",
    component: LoginComponent,
    providers: ["invokeAsync", "loginRedirect","userActionCreator"],
    selector: "login"
});

app.component({
    route: "/gallery/list",
    templateUrl: "wwwroot/components/gallery-list.html",
    component: GalleryListComponent,
    selector: "gallery-list"
});

app.component({
    templateUrl: "wwwroot/components/gallery-editor.html",
    component: GalleryEditorComponent,
    selector: "gallery-editor",
    providers:["galleryActionCreator"]
});

app.component({
    templateUrl: "wwwroot/components/header.html",
    providers:["$rootScope","$route"],
    component: HeaderComponent,
    selector: "app-header"
});

app.component({
    templateUrl: "wwwroot/components/home.html",
    componentName: "homeComponent",
    component: HomeComponent,
    providers: ["brandActionCreator"]
});

app.component({
    templateUrl: "wwwroot/components/photo-upload.html",
    componentName: "photoUploadComponent",
    component: PhotoUploadComponent,
    providers: ["$attrs", "$element", "$http", "$scope"]
});

app.config(["$routeProvider", "apiEndpointProvider", "initialStateProvider", ($routeProvider, apiEndpointProvider, initialStateProvider) => {
    initialStateProvider.configure({
        brands:[],
        galleries: [],
        photos: [],
        tags: [],
        users: [],
        currentUser: null
    });

    apiEndpointProvider.configure("/api");

    $routeProvider
        .when("/", { template: "<login></login>" })
        .when("/brand/list", { template: "<brand-list></brand-list>" })
        .when("/gallery/list", { template: "<gallery-list></gallery-list>" })
        .when("/photo/list", { template: "<photo-list></photo-list>" })
        .when("/tag/list", { template: "<tag-list></tag-list>" })
        .otherwise("/");

}])
    .config(["reducersProvider", reducersProvider => {
        reducersProvider.configure(addBrandReducer);
        reducersProvider.configure(addGalleryReducer);
        reducersProvider.configure(userLoggedInReducer);
    }])
    .config(["loginRedirectProvider", loginRedirectProvider => loginRedirectProvider.setDefaultUrl("/gallery/list")]);
