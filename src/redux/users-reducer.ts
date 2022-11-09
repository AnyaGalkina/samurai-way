import {ActionType} from "./redux-store";
import {UserType} from "./types";
import {usersAPI} from "../api/user-api";
import {setGlobalError} from "./app-reducer";
import {Dispatch} from "redux";
import {RESULT_CODE} from "../enums/resultCode";
import {CommonResType} from "../api/profile-api";

const FOLLOW = "USERS/FOLLOW";
const UNFOLLOW = "USERS/UNFOLLOW";
const SET_USERS = "USERS/SET_USERS";
const SET_CURRENT_PAGE = "USERS/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "USERS/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "USERS/TOGGLE_IS_FETCHING/users-reducer.tsx";
const TOGGLE_FOLLOWING_PROGRESS = "USERS/TOGGLE_FOLLOWING_PROGRESS";


export type InitialStateType = typeof initialState;

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    portionSize: 10,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}

const userReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: true} : u)};
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.payload.userId ? {...u, followed: false} : u)
            };
        case SET_USERS:
        case SET_CURRENT_PAGE:
        case SET_TOTAL_USERS_COUNT:
        case TOGGLE_IS_FETCHING:
            return {...state, ...action.payload};
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : [...state.followingInProgress.filter(id => id !== action.payload.userId)]
            }
        default:
            return state;
    }
}

export const followSuccess = (userId: number) => {
    return {type: FOLLOW, payload: {userId}} as const
};
export const unfollowSuccess = (userId: number) => {
    return {type: UNFOLLOW, payload: {userId}} as const
};
export const setUsers = (users: Array<UserType>) => {
    return {type: SET_USERS, payload: {users}} as const
};
export const setCurrentPage = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, payload: {currentPage}} as const
};
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, payload: {totalUsersCount}} as const
};
export const setToggleIsFetching = (isFetching: boolean) => {
    return {type: TOGGLE_IS_FETCHING, payload: {isFetching}} as const
};
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {type: TOGGLE_FOLLOWING_PROGRESS, payload: {isFetching, userId}} as const
};

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {

    dispatch(setToggleIsFetching(true));
    try {
        dispatch(setCurrentPage(currentPage));

        let response = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setToggleIsFetching(false));
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
    } catch (e: any) {
        dispatch(setGlobalError("Some error occurred"));
        dispatch(setToggleIsFetching(false));
    }
}

const followUnfollowFlow = async (dispatch: Dispatch, userId: number,
                                  apiMethod: (userId: number) => Promise<CommonResType>,
                                  actionCreator: (userId: number) => ReturnType<typeof followSuccess> | ReturnType<typeof unfollowSuccess> ) => {
    try {
        dispatch(toggleFollowingProgress(true, userId));
        let response = await apiMethod(userId);
        if (response.resultCode === RESULT_CODE.SUCCESS)  {
            dispatch(actionCreator(userId));
        }
        dispatch(toggleFollowingProgress(false, userId));
        dispatch(setToggleIsFetching(false));
    } catch (e: any) {
        dispatch(setGlobalError("Some error occurred"));
        dispatch(setToggleIsFetching(false));
    }
}

export const follow = (userId: number) => async (dispatch: Dispatch) => {
    let apiMethod = usersAPI.follow.bind(usersAPI);
    let actionCreator = followSuccess;

    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
}


export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
    let apiMethod = usersAPI.unfollow.bind(usersAPI);
    let actionCreator = unfollowSuccess;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
}

export default userReducer;