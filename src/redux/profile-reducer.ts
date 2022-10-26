import {ActionType, AppStateType} from "./redux-store";
import {PhotosType, ProfileType} from "./types";
import {profileAPI, UpdateProfileType} from "../api/profile-api";
import {stopSubmit} from "redux-form";

export const ADD_POST = "PROFILE/ADD_POST";
export const SET_USER_PROFILE = "PROFILE/SET_USER_PROFILE";
export const UPDATE_USER_STATUS = "PROFILE/UPDATE_USER_STATUS";
export const SAVE_PHOTO_SUCCESS = "PROFILE/SAVE_PHOTO_SUCCESS";
// export const UPDATE_PROFILE = "PROFILE/UPDATE_PROFILE";

export type PostType = {
    id: number;
    likesCounter: number;
    postText: string;
}

export type InitialStateType = {
    profile: null | ProfileType;
    posts: Array<PostType>;
    userStatus: string;
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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.payload.photos} as ProfileType
            };
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
// export const updateProfileAC = (profile: ProfileType) => {
//     debugger
//     // return ({type: UPDATE_PROFILE, payload: {...profile}} as const)
//     return ({type: UPDATE_PROFILE, payload: {profile}} as const)
// }


//Thunks

export const getUserProfile = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response));
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setUserStatus(response));
}

export const updateUserStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) {
        dispatch(setUserStatus(status));
    } else {
        dispatch(response.messages[0]);
    }
}

export const savePhoto = (photo: File) => async (dispatch: any) => {
    let response = await profileAPI.updatePhoto(photo);
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
}

export const updateProfile = (profile: UpdateProfileType) => async (dispatch: any, getState: () => AppStateType) => {
    let response = await profileAPI.updateProfile(profile);
    let userId = getState().auth.userId

    if (response.resultCode === 0) {
        userId && dispatch(getUserProfile(userId));
    } else {
        let errorMessage = response.messages.length > 0 ? response.messages[0] : "some error";
        dispatch(stopSubmit("login", {_error: errorMessage}));
    }
}

export default profileReducer;