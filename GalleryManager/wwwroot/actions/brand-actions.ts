import { IDispatcher } from "../../libs/store";


export class BrandActionCreator {
    constructor(private dispatcher: IDispatcher) {
    }

}


export class AddBrandAction { constructor(public entity) { } }

export class AllBrandsAction { constructor(public entities) { } }

export class RemoveBrandAction { constructor(public id) { } }

export class BrandsFilterAction { constructor(public term) { } }

export class SetCurrentBrandAction { constructor(public id) { } }