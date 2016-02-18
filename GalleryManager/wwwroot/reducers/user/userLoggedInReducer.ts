import { UserLoggedInAction } from "../../actions";

export const userLoggedInReducer = (state, action) => {
    if (action instanceof UserLoggedInAction) {
        state.token = action.userData.access_token;
    }    
    return state;
}
