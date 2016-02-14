/// <reference path="../typings/tsd.d.ts" />

import { BrandActionCreator } from "./actions/brand-actions";

import { BrandService } from "./services/brand-service";

angular.module("galleryManagerApp", [
    "apiEndpoint",
    "fetch",
    "invokeAsync",
    "localStorageManager",
    "routeResolver",
    "routeWhenExtension",
    "safeDigest",
    "store"
])
    .service("brandActionCreator", ["brandService", "dispatcher", "guid", BrandActionCreator])

    .service("brandService", ["$q", "apiEndpoint", "fetch", BrandService])

    .config(["initialStateProvider", (initialStateProvider) => {
        initialStateProvider.configure({});
    }])

    .run(["invokeAsync", "brandActionCreator", (invokeAsync, brandActionCreator: BrandActionCreator) => {
        //var id = brandActionCreator.add({ name: 'Test' });        
}]);