export class GalleryListComponent {
    constructor(private $location: angular.ILocationService,private galleryActionCreator) { }

    storeOnChange = state =>  this.entities = state.galleries;
    
    entities;

    remove = gallery => this.galleryActionCreator.remove({ gallery: gallery });

    photoUpload = gallery => this.$location.path("/photo/upload/" + gallery.id);

    static canActivate = () => [
        "galleryActionCreator", "invokeAsync",
        (galleryActionCreator, invokeAsync) => invokeAsync(galleryActionCreator.all) 
    ]
}