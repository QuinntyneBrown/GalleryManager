import { AllGalleriesAction } from "../../actions";

export const allGalleriesReducer = (state, action) => {
    if (action instanceof AllGalleriesAction) {
        state.galleries = action.entities;
    }
    return state;
}