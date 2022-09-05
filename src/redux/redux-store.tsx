import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer, {addMessage} from "./dialogs-reducer";
import profileReducer, {
    addPost,
    setUserProfile,
    setUserStatus,
} from "./profile-reducer";
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
import {reducer as formReducer} from "redux-form";
import {appReducer, setInitializedSuccessAC} from "./app-reducer";

export type ActionType =
    ReturnType<typeof addPost>
    | ReturnType<typeof addMessage>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setToggleIsFetchingAuth>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof setInitializedSuccessAC>
    | ReturnType<typeof toggleFollowingProgress>;

type RootReducersType = typeof rootReducers;
export type AppStateType = ReturnType<RootReducersType>;

let rootReducers = combineReducers({
    dialogPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})


let store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

export default store;