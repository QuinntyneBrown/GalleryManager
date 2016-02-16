/// <reference path="../typings/tsd.d.ts" />

import { BrandActionCreator, GalleryActionCreator, PhotoActionCreator } from "./actions";

import { BrandService, GalleryService, PhotoService } from "./services";

import { HeaderComponent, HomeComponent, AppComponent, PhotoUploadComponent } from "./components";

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

app.config(["$routeProvider", "initialStateProvider", ($routeProvider, initialStateProvider) => {
    initialStateProvider.configure({});

    $routeProvider.when("/", { componentName: "homeComponent" })
        .otherwise("/");
}]);

app.run(["invokeAsync", "brandActionCreator", (invokeAsync, brandActionCreator: BrandActionCreator) => {
        //var id = brandActionCreator.add({ name: 'Test' });        
}]);