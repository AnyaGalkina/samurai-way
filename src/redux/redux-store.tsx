import {combineReducers, createStore} from "redux";
import dialogsReducer, {addMessage, updateNewMessageText} from "./dialogs-reducer";
import profileReducer, {addPost, setUserProfile, updateNewPostText} from "./profile-reducer";
import usersReducer, {
    follow,
    setCurrentPage,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "./users-reducer";

export type ActionType =
    ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof addMessage>
    | ReturnType<typeof updateNewMessageText>
    | ReturnType<typeof follow>
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setUserProfile>;

type RootReducersType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducersType>;

let rootReducers = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer
})


let store = createStore(rootReducers);

export default store;