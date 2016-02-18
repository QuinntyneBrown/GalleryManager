
import { BrandService, GalleryService, PhotoService, TagService, UserService } from "./services";

var app = (<any>angular.module("services", [
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