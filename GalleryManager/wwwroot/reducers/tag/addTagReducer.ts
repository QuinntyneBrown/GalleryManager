import { AddTagAction } from "../../actions";
import { addOrUpdate } from "../../../libs";

export const addTagReducer = (state, action) => {
    if (action instanceof AddTagAction) {
        addOrUpdate({ items: state.photos, item: action.entity });
    }
    return state;
}