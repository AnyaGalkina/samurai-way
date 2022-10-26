import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogsReducer, {addMessage} from "./dialogs-reducer";
import profileReducer, {
    addPost, savePhotoSuccess,
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
import authReducer, {getCaptchaUrlSuccess, setAuthUserData, setToggleIsFetchingAuth} from "./auth-reducer";
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
    | ReturnType<typeof savePhotoSuccess>
    | ReturnType<typeof getCaptchaUrlSuccess>
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

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducers, /* preloadedState, */ composeEnhancers(
//     applyMiddleware(thunkMiddleware)
// ));

const store = createStore(rootReducers, /* preloadedState, */
    applyMiddleware(thunkMiddleware)
);

// let store = createStore(rootReducers, applyMiddleware(thunkMiddleware));

export default store;