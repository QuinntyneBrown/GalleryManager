import { AllPhotosAction } from "../../actions";

export const allPhotosReducer = (state, action) => {
    if (action instanceof AllPhotosAction) {
        state.photos = action.entities;
    }
    return state;
}