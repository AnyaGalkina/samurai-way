import {ActionType} from "./redux-store";
import {authAPI} from "../api/auth-api";
import {stopSubmit} from "redux-form";
import {securityAPI} from "../api/security-api";

const SET_USER_DATA = "AUTH/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "AUTH/GET_CAPTCHA_URL_SUCCESS";
const SET_TOGGLE_IS_FETCHING = "AUTH/SET_TOGGLE_IS_FETCHING/auth-reducer.ts";


export type InitialStateType = typeof initialState;

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    isFetching: true,
    captchaUrl: null as string | null,
}

const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case GET_CAPTCHA_URL_SUCCESS:
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

export const getCaptchaUrlSuccess = (captchaUrl: string) => {
    return {type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}} as const
}


export const getAuthUserData = () => async (dispatch: any) => {
    dispatch(setToggleIsFetchingAuth(true));
    const response = await authAPI.getMe();
    let {id, email, login} = response.data;
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(id, email, login, true));
    }
    dispatch(setToggleIsFetchingAuth(false));
}

export const login = (email: string, password: string, rememberMe: boolean, captchaUrl?: string) => async (dispatch: any) => {
    dispatch(setToggleIsFetchingAuth(true));
    const response = await authAPI.login(email, password, rememberMe, captchaUrl);
    dispatch(setToggleIsFetchingAuth(false));
    if (response.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if(response.resultCode === 10){
            dispatch(getCaptchaUrl());
        }
        let errorMessage = response.messages.length > 0 ? response.messages[0] : "some error";
        dispatch(stopSubmit("login", {_error: errorMessage}));
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    const response = await securityAPI.getCaptchaUrl();
        dispatch(getCaptchaUrlSuccess(response.url));
}

export const logout = () => async (dispatch: any) => {
    const response = await authAPI.logout();
    if (response.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;