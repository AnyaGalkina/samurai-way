import {ActionType} from "./redux-store";
import {ProfileType} from "./types";
import {profileAPI} from "../api/api";

export const ADD_POST = "ADD_POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const UPDATE_USER_STATUS = "UPDATE_USER_STATUS";

export type PostType = {
    id: number;
    likesCounter: number;
    postText: string,
}

export type InitialStateType = {
    profile: null | ProfileType,
    posts: Array<PostType>,
    userStatus: string
}

let initialState = {
    profile: null,
    posts: [
        {id: 1, likesCounter: 120, postText: "Hello! Happy to see you!"},
        {id: 2, likesCounter: 70, postText: "Good luck!"},
    ],
    userStatus: ""
}

const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {id: 3, likesCounter: 0, postText: action.payload.postText}
            return {...state, posts: [...state.posts, newPost]};
        case SET_USER_PROFILE:
        case UPDATE_USER_STATUS:
            return {...state, ...action.payload}
        // return {...state, profile: action.payload.profile};
        default:
            return state;
    }
}

export const addPost = (postText: string) => {
    return ({type: ADD_POST, payload: {postText}} as const);
}
export const setUserProfile = (profile: ProfileType) => {
    return ({type: SET_USER_PROFILE, payload: {profile}} as const);
};
export const setUserStatus = (userStatus: string) => {
    return ({type: UPDATE_USER_STATUS, payload: {userStatus}} as const)
};

export const getUserProfile = (userId: number) => {
    return (dispatch: any) => {
        profileAPI.getProfile(userId)
            .then((response) => {
                dispatch(setUserProfile(response));

            })
    }
}

export const getUserStatus = (userId: number) => {
    return (dispatch: any) => {
        profileAPI.getStatus(userId)
            .then(response => {
                debugger
                dispatch(setUserStatus(response))
            })
    }
}

export const updateUserStatus = (status: string) => {
    debugger
    return (dispatch: any) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setUserStatus(status))
                }
            })
    }
}

export default profileReducer;