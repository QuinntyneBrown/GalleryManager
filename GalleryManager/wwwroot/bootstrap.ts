﻿/// <reference path="../typings/tsd.d.ts" />

import { BrandActionCreator, GalleryActionCreator, PhotoActionCreator } from "./actions";

import { BrandService, GalleryService, PhotoService } from "./services";

import {
GalleryListComponent,
HeaderComponent,
HomeComponent,
AppComponent,
LoginComponent,
PhotoUploadComponent
} from "./components";

import { addBrandReducer } from "./reducers";


var app = (<any>angular.module("galleryManagerApp", [
    "apiEndpoint",
    "fetch",
    "invokeAsync",
    "localStorageManager",
    "routeResolver",
    "routeWhenExtension",
    "safeDigest",
    "store"
]));

app.component({
    templateUrl: "wwwroot/components/app.html",
    component: AppComponent,
    selector: "app"
});

app.component({
    route: "/",
    templateUrl: "wwwroot/components/login.html",
    component: LoginComponent,
    selector: "login"
});

app.component({
    route: "/gallery-list",
    templateUrl: "wwwroot/components/gallery-list.html",
    component: GalleryListComponent,
    selector: "gallery-list"
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
    
app.service("brandActionCreator", ["brandService", "dispatcher", "guid", BrandActionCreator]);

app.service("brandService", ["$q", "apiEndpoint", "fetch", BrandService]);

app.config(["$routeProvider", "apiEndpointProvider", "initialStateProvider", ($routeProvider, apiEndpointProvider, initialStateProvider) => {

    initialStateProvider.configure({});

    apiEndpointProvider.configure("/api");

    $routeProvider
        .when("/", { template: "<login></login>" })
        .when("/gallery-list", { template: "<gallery-list></gallery-list>" })
        .otherwise("/");
}]);

app.run(["invokeAsync", "brandActionCreator", (invokeAsync, brandActionCreator: BrandActionCreator) => {
                
}]);