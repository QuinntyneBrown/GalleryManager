import { RemovePhotoAction } from "../../actions";
import { pluckOut } from "../../../libs";

export const removePhotoReducer = (state, action) => {
    if (action instanceof RemovePhotoAction)
        pluckOut({ items: state.galleries, value: action.entity });
    return state;
}