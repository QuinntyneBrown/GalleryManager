import { RemoveGalleryAction } from "../../actions";
import { pluckOut } from "../../../libs";

export const removeGalleryReducer = (state, action) => {
    if (action instanceof RemoveGalleryAction) 
        pluckOut({ items: state.galleries, value: action.entity });
        
    return state;
}