import { IDispatcher } from "../../libs/store";

export interface IBrandActionCreator {

}

export class BrandActionCreator implements IBrandActionCreator {
    constructor(private brandService, private dispatcher: IDispatcher, private guid) {

    }

    addBrand = options => {
        var newId = this.guid();
        this.brandService.add({ data: options.data }).then(results => {
            var action = new AddBrandAction(newId, results);
            this.dispatcher.dispatch(action);
        });
        return newId;
    } 

}

export class TestAction { constructor(public id) { } }


export class AddBrandAction { constructor(public id, public entity) { } }

export class AllBrandsAction { constructor(public id, public entities) { } }

export class RemoveBrandAction { constructor(public id, public entityId) { } }

export class BrandsFilterAction { constructor(public id, public term) { } }

export class SetCurrentBrandAction { constructor(public id, public entityId) { } }