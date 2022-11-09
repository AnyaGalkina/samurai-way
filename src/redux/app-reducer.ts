import {ActionType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";


const SET_INITIALIZED_SUCCESS = "APP/SET_INITIALIZED_SUCCESS ";
const SET_GLOBAL_ERROR = "APP/SET_GLOBAL_ERROR";
const CLEAR_GLOBAL_ERROR = "APP/CLEAR_GLOBAL_ERROR";

let initialState = {
    initialized: false,
    globalError: "",
    appStatus: "idle" as AppStatusType
}

type AppStatusType = "loading" | "idle"
type InitialStateType = typeof initialState;

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
        case CLEAR_GLOBAL_ERROR:
        case "SET_APP_STATUS":
        case SET_GLOBAL_ERROR:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export const setInitializedSuccessAC = () => ({type: SET_INITIALIZED_SUCCESS, payload: {initialized: true}} as const);
export const setGlobalError = (globalError: string) => ({type: SET_GLOBAL_ERROR, payload: {globalError}} as const);
export const clearGlobalError = () => ({type: CLEAR_GLOBAL_ERROR, payload: {globalError: ""}} as const);
export const setAppStatus = (appStatus: AppStatusType) => {
    return {type: "SET_APP_STATUS", payload: {appStatus}} as const
};

export const initializeApp = () => (dispatch: any) => {
    try {
        let promise = dispatch(getAuthUserData());
        promise.then(() => {
            dispatch(setInitializedSuccessAC());
        })
    } catch (e: any) {
        dispatch(setGlobalError("Some error occurred"));
    }
}