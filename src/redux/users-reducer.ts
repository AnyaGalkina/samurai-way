import {ActionType} from "./redux-store";
import {UserType} from "./types";
import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING/users-reducer.tsx";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";


export type InitialStateType = typeof initialState;

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}

const userReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    debugger
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
                followingInProgress: state.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : [...state.followingInProgress.filter(id => id != action.payload.userId)]
            }
        default:
            return state;
    }
}

export const followSuccess = (userId: number) => {
    debugger
    return {type: FOLLOW, payload: {userId}} as const
};
export const unfollowSuccess = (userId: number) => {
    debugger
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
    debugger
    return {type: TOGGLE_FOLLOWING_PROGRESS, payload: {isFetching, userId}} as const
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: any) => {
        debugger
        dispatch(setToggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));

        usersAPI.getUsers(currentPage, pageSize)
            .then((response) => {
                dispatch(setToggleIsFetching(false));
                dispatch(setUsers(response.items));
                dispatch(setTotalUsersCount(response.totalCount));
            })
    }
}

export const follow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
}


export const unfollow = (userId: number) => {
    return (dispatch: any) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
}

export default userReducer;