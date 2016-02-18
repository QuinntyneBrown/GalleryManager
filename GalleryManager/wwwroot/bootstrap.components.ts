
import {
GalleryListComponent,
GalleryEditorComponent,
HeaderComponent,
HomeComponent,
AppComponent,
LoginComponent,
PhotoUploadComponent
} from "./components";

var app = (<any>angular.module("components", [
    "store"
]));


app.component({
    templateUrl: "wwwroot/components/app.html",
    component: AppComponent,
    selector: "app"
});

app.component({
    templateUrl: "wwwroot/components/login.html",
    component: LoginComponent,
    providers: ["invokeAsync", "loginRedirect", "userActionCreator"],
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
    providers: ["galleryActionCreator"]
});

app.component({
    templateUrl: "wwwroot/components/header.html",
    providers: ["$rootScope", "$route"],
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
    selector: "photo-upload",
    templateUrl: "wwwroot/components/photo-upload.html",
    componentName: "photoUploadComponent",
    component: PhotoUploadComponent,
    providers: ["$attrs", "$element", "$http", "$routeParams","$scope"]
});