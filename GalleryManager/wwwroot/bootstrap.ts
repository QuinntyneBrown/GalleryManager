/// <reference path="../typings/tsd.d.ts" />

import { BrandActionCreator, GalleryActionCreator, PhotoActionCreator, TagActionCreator, UserActionCreator } from "./actions";

import { addBrandReducer, addGalleryReducer, allGalleriesReducer, removeGalleryReducer, userLoggedInReducer } from "./reducers";


require("./bootstrap.services");
require("./bootstrap.components");

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
    "store",
    
    "components",
    "services",

]));

app.service("brandActionCreator", ["brandService", "dispatcher", "guid", BrandActionCreator]);
app.service("galleryActionCreator", ["dispatcher", "galleryService", "guid", GalleryActionCreator]);
app.service("tagActionCreator", ["tagService", "dispatcher", "guid", TagActionCreator]);
app.service("userActionCreator", ["dispatcher", "guid", "userService", UserActionCreator]);
app.service("photoActionCreator", ["photoService", "dispatcher", "guid", PhotoActionCreator]);

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
        .when("/photo/upload/:galleryId", { template: "<photo-upload></photo-upload>" })
        .when("/tag/list", { template: "<tag-list></tag-list>" })
        .otherwise("/");

}])
    .config(["reducersProvider", reducersProvider => {
        reducersProvider.configure(addBrandReducer);
        reducersProvider.configure(addGalleryReducer);
        reducersProvider.configure(allGalleriesReducer);
        reducersProvider.configure(removeGalleryReducer);
        reducersProvider.configure(userLoggedInReducer);
    }])
    .config(["loginRedirectProvider", loginRedirectProvider => loginRedirectProvider.setDefaultUrl("/gallery/list")]);
