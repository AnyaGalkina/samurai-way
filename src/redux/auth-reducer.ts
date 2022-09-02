import {ActionType} from "./redux-store";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const SET_TOGGLE_IS_FETCHING = "SET_TOGGLE_IS_FETCHING/auth-reducer.ts";


export type InitialStateType = typeof initialState;

// export type AuthDataType = {
//     userId: string | null,
//     email: string | null,
//     login: boolean,
// }

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    isFetching: true
}

const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload};
        case SET_TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        default:
            return state;
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {type: SET_USER_DATA, payload: {userId, email, login, isAuth}} as const
};

export const setToggleIsFetchingAuth = (isFetching: boolean) => {
    return {type: SET_TOGGLE_IS_FETCHING, isFetching} as const
};


export const getAuthUserData = () => {
    return (dispatch: any) => {
        dispatch(setToggleIsFetchingAuth(true));
        authAPI.getMe()
            .then((response) => {
                let {id, email, login} = response.data;
                if (response.resultCode === 0) {
                    dispatch(setAuthUserData(id, email, login, true));
                }
                dispatch(setToggleIsFetchingAuth(false))
            })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    dispatch(setToggleIsFetchingAuth(true));
    authAPI.login(email, password, rememberMe)
        .then((response) => {
            dispatch(setToggleIsFetchingAuth(false))
            if (response.resultCode === 0) {
                dispatch(getAuthUserData());
            }else{
                let errorMessage =  response.messages.length > 0 ? response.messages[0] : "some error";
                dispatch(stopSubmit("login", {_error:  errorMessage }));
            }
        })
}

export const logout =  () => (dispatch: any) => {
    authAPI.logout()
        .then((response) => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}

export default authReducer;