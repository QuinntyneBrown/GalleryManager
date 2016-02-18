import { RemoveTagAction } from "../../actions";
import { pluckOut } from "../../../libs";

export const removeTagReducer = (state, action) => {
    if (action instanceof RemoveTagAction)
        pluckOut({ items: state.galleries, value: action.entity });
    return state;
}