import { IDispatcher } from "../../libs/store";

export class PhotoActionCreator {
    constructor(private dispatcher: IDispatcher, private photoService) {
    }

}

export class AddPhotoAction { constructor(public entity) { } }

export class AllPhotosAction { constructor(public entities) { } }

export class RemovePhotoAction { constructor(public id) { } }

export class PhotosFilterAction { constructor(public term) { } }

export class SetCurrentPhotoAction { constructor(public id) { } }