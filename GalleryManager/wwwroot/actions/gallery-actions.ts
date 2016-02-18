import { IDispatcher } from "../../libs/store";


export class GalleryActionCreator {
    constructor(private dispatcher: IDispatcher, private galleryService, private guid) { }

    addOrUpdate = options => {
        var newId = this.guid();
        this.galleryService.add({
            data: {
                name: options.name
            }
        }).then(results => {
            this.dispatcher.dispatch(new AddGalleryAction(newId, results));
        });
        return newId;
    }

    all = options => {
        var newId = this.guid();
        this.galleryService.get().then(results => {
            this.dispatcher.dispatch(new AllGalleriesAction(newId, results));
        });
        return newId;
    }
}


export class AddGalleryAction { constructor(public id, public entity) { } }

export class AllGalleriesAction { constructor(public id, public entities) { } }

export class RemoveGalleryAction { constructor(public id, public entity) { } }

export class GallerysFilterAction { constructor(public id, public term) { } }

export class SetCurrentGalleryAction { constructor(public id, public entityId) { } }