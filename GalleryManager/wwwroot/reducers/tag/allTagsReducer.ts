import { AllTagsAction } from "../../actions";

export const allTagsReducer = (state, action) => {
    if (action instanceof AllTagsAction) {
        state.tags = action.entities;
    }
    return state;
}