import { AllGalleriesAction } from "../../actions";

export const allGalleryReducer = (state, action) => {
    if (action instanceof AllGalleriesAction) {
        state.galleries = action.entities;
    }
    return state;
}