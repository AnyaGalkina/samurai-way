import {ActionType, AppStateType} from "./redux-store";
import {PhotosType, ProfileType} from "./types";
import {profileAPI, UpdateProfileType} from "../api/profile-api";
import {stopSubmit} from "redux-form";
import {setGlobalError} from "./app-reducer";
import {v1} from "uuid";
import {Dispatch} from "redux";
import {RESULT_CODE} from "../enums/resultCode";

export const ADD_POST = "PROFILE/ADD_POST";
export const SET_USER_PROFILE = "PROFILE/SET_USER_PROFILE";
export const UPDATE_USER_STATUS = "PROFILE/UPDATE_USER_STATUS";
export const SAVE_PHOTO_SUCCESS = "PROFILE/SAVE_PHOTO_SUCCESS";
export const CHANGE_COUNT = "PROFILE/CHANGE_COUNT";

export type PostType = {
    id: string;
    likesCounter: number;
    postText: string;
    isLikeAdded: boolean;
}

export type InitialStateType = {
    profile: null | ProfileType;
    posts: Array<PostType>;
    userStatus: string;
}

let initialState = {
    profile: null,
    posts: [
        {id: v1(), likesCounter: 120, postText: "Best morning starts with coffee ☕. Enjoy your day!", isLikeAdded: false},
        {id: v1(), likesCounter: 79, postText: "Good luck!", isLikeAdded: true},
        {id: v1(), likesCounter: 240, postText: "♡ What a wonderful day ♡", isLikeAdded: true},
    ],
    userStatus: ""
}

const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {id: v1(), likesCounter: 0, isLikeAdded: false, postText: action.payload.postText}
            return {...state, posts: [...state.posts, newPost]};
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.payload.photos} as ProfileType
            };
        case CHANGE_COUNT:
            return {...state,
                    posts: state.posts.map(p => p.id === action.payload.id
                        ? {...p, isLikeAdded: action.payload.isLikeAdded,
                            likesCounter:  action.payload.isLikeAdded ? (p.likesCounter+1) : (p.likesCounter-1) }
                        : p)
            }

        case SET_USER_PROFILE:
        case UPDATE_USER_STATUS:
            return {...state, ...action.payload};
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
export const savePhotoSuccess = (photos: PhotosType) => {
    return ({type: SAVE_PHOTO_SUCCESS, payload: {photos}} as const)
};
export const changeLikesCounter = (id: string, isLikeAdded: boolean) => {
    return ({type: CHANGE_COUNT, payload: {id, isLikeAdded}} as const)
}


//Thunks

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    try {
        let response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response));
    } catch (e: any) {
        dispatch(setGlobalError("Some error occurred"));
    }
}

export const getUserStatus = (userId: number) => async (dispatch: Dispatch) => {
    try {
        let response = await profileAPI.getStatus(userId);
        dispatch(setUserStatus(response));
    } catch (e: any) {
        dispatch(setGlobalError("Some error occurred"));
    }
}

export const updateUserStatus = (status: string) => async (dispatch: any) => {
    try {
        let response = await profileAPI.updateStatus(status);
        if (response.resultCode === RESULT_CODE.SUCCESS)  {
            dispatch(setUserStatus(status));
        } else {
            dispatch(response.messages[0]);
        }
    } catch (e: any) {
        dispatch(setGlobalError("Some error occurred"));
    }
}

export const savePhoto = (photo: File) => async (dispatch: Dispatch) => {
    try {
        let response = await profileAPI.updatePhoto(photo);
        if (response.resultCode === RESULT_CODE.SUCCESS) {
            dispatch(savePhotoSuccess(response.data.photos));
        }
    } catch (e: any) {
        dispatch(setGlobalError("Some error occurred"));
    }
}

export const updateProfile = (profile: UpdateProfileType) => async (dispatch: any, getState: () => AppStateType) => {
    try {
        let response = await profileAPI.updateProfile(profile);
        let userId = getState().auth.userId

        if (response.resultCode === RESULT_CODE.SUCCESS)  {
            userId && dispatch(getUserProfile(userId));
        } else {
            let errorMessage = response.messages.length > 0 ? response.messages[0] : "some error";
            dispatch(stopSubmit("login", {_error: errorMessage}));
        }
    } catch (e: any) {
        dispatch(setGlobalError("Some error occurred"));
    }
}

export default profileReducer;