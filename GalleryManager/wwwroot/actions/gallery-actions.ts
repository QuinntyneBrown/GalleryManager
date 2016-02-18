import { IDispatcher } from "../../libs/store";


export class GalleryActionCreator {
    constructor(private dispatcher: IDispatcher, private galleryService, private guid) { }

    add = options => {
        var newId = this.guid();
        this.galleryService.add({
            name: options.name
        }).then(results => {
            this.dispatcher.dispatch(new AddGalleryAction(newId, results));
        });
        return newId;
    }
}


export class AddGalleryAction { constructor(public id, public entity) { } }

export class AllGalleriesAction { constructor(public id, public entities) { } }

export class RemoveGalleryAction { constructor(public id, public entityId) { } }

export class GallerysFilterAction { constructor(public id, public term) { } }

export class SetCurrentGalleryAction { constructor(public id, public entityId) { } }