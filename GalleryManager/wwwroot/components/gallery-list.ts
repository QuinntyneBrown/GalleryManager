export class GalleryListComponent {
    constructor() { }

    storeOnChange = state => this.state = state;

    state;

    static canActivate = () => [
        "galleryActionCreator", "invokeAsync",
        (galleryActionCreator, invokeAsync) => invokeAsync(galleryActionCreator.all) 
    ]
}