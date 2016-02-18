import { AddPhotoAction } from "../../actions";
import { addOrUpdate } from "../../../libs";

export const addPhotoReducer = (state, action) => {
    if (action instanceof AddPhotoAction) {
        addOrUpdate({ items: state.photos, item: action.entity });
    }
    return state;
}