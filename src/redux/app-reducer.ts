import {ActionType} from "./redux-store";
import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";


const SET_INITIALIZED_SUCCESS = "APP/SET_INITIALIZED_SUCCESS ";

let initialState = {
    initialized: false
}

type InitialStateType = typeof initialState;

export const appReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

export const setInitializedSuccessAC = () => ({type: SET_INITIALIZED_SUCCESS, payload: {initialized: true}} as const);

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(setInitializedSuccessAC());
    })
}