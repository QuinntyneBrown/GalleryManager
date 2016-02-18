export class GalleryEditorComponent {
    constructor(private galleryActionCreator) {

    }

    storeOnChange = state => {

    }

    addOrUpdate = () => this.galleryActionCreator.addOrUpdate({
        id: this.id,
        name: this.name,
        photos: this.photos
    });
    
    remove = () => this.galleryActionCreator.remove({ id: this.id });
         
    id;
    name;
    photos: Array<any>;
    authorName;
}