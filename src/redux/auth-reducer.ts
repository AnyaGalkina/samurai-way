import {ActionType} from "./redux-store";
import {authAPI} from "../api/api";

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
    isFetching: false
}

const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload, isAuth: true};
        case SET_TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        default:
            return state;
    }
}

export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {type: SET_USER_DATA, payload: {userId, email, login}} as const
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
                dispatch(setToggleIsFetchingAuth(false))
                if (response.resultCode === 0) {
                    dispatch(setAuthUserData(id, email, login));
                }
            })
    }
}


export default authReducer;