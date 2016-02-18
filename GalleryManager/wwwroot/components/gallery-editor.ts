export class GalleryEditorComponent {
    constructor(private galleryActionCreator) { }

    storeOnChange = state => {
        this.id = null;
        this.name = null;
        this.photos = [];
        this.authorName = null;
    }

    addOrUpdate = () => this.galleryActionCreator.addOrUpdate({ name: this.name });
    
    remove = () => this.galleryActionCreator.remove({ id: this.id });
         
    id;
    name;
    photos: Array<any>;
    authorName;
}