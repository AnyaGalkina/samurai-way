import {ActionType} from "../../app/redux-store";
import {authAPI} from "./auth-api";
import {stopSubmit} from "redux-form";
import {securityAPI} from "./security-api";
import {setGlobalError} from "../../app/app-reducer";
import {RESULT_CODE} from "../../common/enums/resultCode";
import {Nullable} from '../../common/types';

const SET_USER_DATA = "AUTH/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "AUTH/GET_CAPTCHA_URL_SUCCESS";
const SET_TOGGLE_IS_FETCHING = "AUTH/SET_TOGGLE_IS_FETCHING/auth-reducer.ts";


export type InitialStateType = typeof initialState;

let initialState = {
    userId: null as Nullable<number>,
    email: null as Nullable<string>,
    login: null as Nullable<string>,
    isAuth: false,
    isFetching: true,
    captchaUrl: null as Nullable<string>,
}

const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case GET_CAPTCHA_URL_SUCCESS:
        case SET_TOGGLE_IS_FETCHING:
        case SET_USER_DATA:
            return {...state, ...action.payload};
            // case SET_TOGGLE_IS_FETCHING:
            // return {...state, isFetching: action.isFetching};
        default:
            return state;
    }
}

export const setAuthUserData = (userId: Nullable<number>, email: Nullable<string>, login: Nullable<string>, isAuth: boolean) => {
    return {type: SET_USER_DATA, payload: {userId, email, login, isAuth}} as const
};

export const setToggleIsFetchingAuth = (isFetching: boolean) => {
    return {type: SET_TOGGLE_IS_FETCHING,  payload: {isFetching}} as const
};

export const getCaptchaUrlSuccess = (captchaUrl: string) => {
    return {type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}} as const
}


export const getAuthUserData = () => async (dispatch: any) => {
    try {
        dispatch(setToggleIsFetchingAuth(true));
        const response = await authAPI.getMe();
        let {id, email, login} = response.data;
        if (response.resultCode === RESULT_CODE.SUCCESS)  {
            dispatch(setAuthUserData(id, email, login, true));
        }
        dispatch(setToggleIsFetchingAuth(false));
    } catch (e: any) {
        dispatch(setGlobalError("Some error occurred"));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captchaUrl?: Nullable<string>) => async (dispatch: any) => {
    try {
        dispatch(setToggleIsFetchingAuth(true));
        const response = await authAPI.login(email, password, rememberMe, captchaUrl);
        dispatch(setToggleIsFetchingAuth(false));
        if (response.resultCode === RESULT_CODE.SUCCESS) {
            dispatch(getAuthUserData());
        } else {
            if (response.resultCode === RESULT_CODE.CAPTCHA)  {
                dispatch(getCaptchaUrl());
            }
            let errorMessage = response.messages.length > 0 ? response.messages[0] : "some error";
            dispatch(stopSubmit("login", {_error: errorMessage}));
        }
    } catch (e: any) {
        dispatch(setGlobalError("Some error occurred"));
    }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
    try {
        const response = await securityAPI.getCaptchaUrl();
        dispatch(getCaptchaUrlSuccess(response.url));
    } catch (e: any) {
        dispatch(setGlobalError("Some error occurred"));
    }
}

export const logout = () => async (dispatch: any) => {
    try {
        const response = await authAPI.logout();
        if (response.resultCode === RESULT_CODE.SUCCESS) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    } catch (e: any) {
        dispatch(setGlobalError("Some error occurred"));
    }
}

export default authReducer;