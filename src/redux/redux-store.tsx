import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer, {addMessage, updateNewMessageText} from "./dialogs-reducer";
import profileReducer, {addPost, setUserProfile, updateNewPostText} from "./profile-reducer";
import usersReducer, {
    followSuccess,
    setCurrentPage,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    unfollowSuccess
} from "./users-reducer";
import authReducer, {setAuthUserData, setToggleIsFetchingAuth} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

export type ActionType =
    ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof addMessage>
    | ReturnType<typeof updateNewMessageText>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setToggleIsFetchingAuth>
    | ReturnType<typeof toggleFollowingProgress>;

type RootReducersType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducersType>;

let rootReducers = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer
})


let store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

export default store;