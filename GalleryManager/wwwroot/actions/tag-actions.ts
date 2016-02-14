import { IDispatcher } from "../../libs/store";


export class TagActionCreator {
    constructor(private dispatcher: IDispatcher, private tagService) {
    }

}


export class AddTagAction { constructor(public entity) { } }

export class AllTagsAction { constructor(public entities) { } }

export class RemoveTagAction { constructor(public id) { } }

export class TagsFilterAction { constructor(public term) { } }

export class SetCurrentTagAction { constructor(public id) { } }