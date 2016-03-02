import { CanActivate, Component } from "../../../libs/component-decorators";

@Component({
    route: "/gallery/list",
    templateUrl: "wwwroot/components/gallery/gallery-list.html",
    selector: "gallery-list",
    providers: ["$location","galleryActionCreator"]
})
@CanActivate([
    "galleryActionCreator", "invokeAsync",
    (galleryActionCreator, invokeAsync) => invokeAsync(galleryActionCreator.all)
])
export class GalleryListComponent {
    constructor(private $location: angular.ILocationService,private galleryActionCreator) { }
    storeOnChange = state =>  this.entities = state.galleries;   
    entities;
    remove = gallery => this.galleryActionCreator.remove({ gallery: gallery });
    photoUpload = gallery => this.$location.path("/photo/upload/" + gallery.id);    
}