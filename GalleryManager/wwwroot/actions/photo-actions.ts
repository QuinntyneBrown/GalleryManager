import { IDispatcher } from "../../libs/store";

export class PhotoActionCreator {
    constructor(private dispatcher: IDispatcher, private guid, private photoService) { }

}

export class AddPhotoAction { constructor(public id, public entity) { } }

export class AllPhotosAction { constructor(public id, public entities) { } }

export class RemovePhotoAction { constructor(public id, public entity) { } }

export class PhotosFilterAction { constructor(public id, public term) { } }

export class SetCurrentPhotoAction { constructor(public id, public entityId) { } }