import { IDispatcher } from "../../libs/store";


export class GalleryActionCreator {
    constructor(private dispatcher: IDispatcher) {
    }

}


export class AddGalleryAction { constructor(public entity) { } }

export class AllGalleriesAction { constructor(public entities) { } }

export class RemoveGalleryAction { constructor(public id) { } }

export class GallerysFilterAction { constructor(public term) { } }

export class SetCurrentGalleryAction { constructor(public id) { } }