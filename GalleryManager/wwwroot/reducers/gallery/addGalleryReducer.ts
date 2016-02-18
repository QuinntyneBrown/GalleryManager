import { AddGalleryAction } from "../../actions";
import { addOrUpdate } from "../../../libs";

export const addGalleryReducer = (state, action) => {    
    if (action instanceof AddGalleryAction) {
        addOrUpdate({ items: state.galleries, item: action.galleryData });
    }
    return state;
}