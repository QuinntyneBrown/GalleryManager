import { SetCurrentTabAction, TabChildLoadedAction } from "../actions";

export const setCurrentTabReducer = (state, action) => {
    if (action instanceof SetCurrentTabAction) {
        state.tabIndex[action.tabName] = action.index;
        state.lastTriggeredByAction = SetCurrentTabAction;
    }    
    return state;
}

export const tabChildLoadedReducer = (state, action) => {
    if (action instanceof TabChildLoadedAction) {
        state.lastTriggeredByAction = TabChildLoadedAction;
    }
    return state;
}
