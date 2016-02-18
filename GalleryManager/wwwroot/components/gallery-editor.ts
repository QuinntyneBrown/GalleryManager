export class GalleryEditorComponent {
    constructor(private galleryActionCreator) {

    }

    storeOnChange = state => {

    }

    addOrUpdate = () => this.galleryActionCreator.addOrUpdate({
        name: this.name
    });
    
    remove = () => this.galleryActionCreator.remove({ id: this.id });
         
    id;
    name;
    photos: Array<any>;
    authorName;
}