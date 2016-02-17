/// <reference path="../typings/tsd.d.ts" />

import { BrandActionCreator, GalleryActionCreator, PhotoActionCreator, TagActionCreator, UserActionCreator } from "./actions";

import { BrandService, GalleryService, PhotoService, TagService, UserService } from "./services";

import {
GalleryListComponent,
HeaderComponent,
HomeComponent,
AppComponent,
LoginComponent,
PhotoUploadComponent
} from "./components";



import { addBrandReducer, userLoggedInReducer } from "./reducers";


var app = (<any>angular.module("galleryManagerApp", [
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
app.service("galleryActionCreator", ["galleryService", "dispatcher", "guid", GalleryActionCreator]);
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
    templateUrl: "wwwroot/components/gallery-list.html",
    component: GalleryListComponent,
    selector: "gallery-list"
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

    initialStateProvider.configure({});

    apiEndpointProvider.configure("/api");

    $routeProvider
        .when("/", { template: "<login></login>" })
        .when("/brand/list", { template: "<brand-list></brand-list>" })
        .when("/gallery/list", { template: "<gallery-list></gallery-list>" })
        .otherwise("/");

}])
    .config(["reducersProvider", reducersProvider => {
        reducersProvider.configure(addBrandReducer);
        reducersProvider.configure(userLoggedInReducer);
    }])
    .config(["loginRedirectProvider", loginRedirectProvider => loginRedirectProvider.setDefaultUrl("/gallery/list")]);

app.run(["invokeAsync", "brandActionCreator", (invokeAsync, brandActionCreator: BrandActionCreator) => {
                
}]);