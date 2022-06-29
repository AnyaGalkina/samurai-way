import {combineReducers, createStore} from "redux";
import dialogsReducer, {addMessageAC, updateNewMessageTextAC} from "./dialogs-reducer";
import profileReducer, {addPostAC, updateNewPostTextAC} from "./profile-reducer";

export type ActionType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>;

type RootReducersType = typeof rootReducers;
export type AppState = ReturnType<RootReducersType>;

let rootReducers = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer,
})


 let store = createStore(rootReducers);

export default store;