import {ActionType} from "./redux-store";
import {ProfileType} from "./types";

export const ADD_POST = "ADD_POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

export type PostType = {
    id: number;
    likesCounter: number;
    postText: string
}

export type InitialStateType = {
    profile: null | ProfileType,
    posts: Array<PostType>,
    newPostText: string,
}

let initialState = {
    profile: null,
    posts: [
        {id: 1, likesCounter: 120, postText: "Hello! Happy to see you!"},
        {id: 2, likesCounter: 70, postText: "Good luck!"},
    ],
    newPostText: "",
}

// export type InitialStateType = typeof initialState;

const profileReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {id: 3, likesCounter: 0, postText: state.newPostText}
            return {...state, posts: [...state.posts, newPost], newPostText: ""};
        case UPDATE_NEW_POST_TEXT:
            if (action.postText) {
                return {...state, newPostText: action.postText}
            }
            return state;
        case SET_USER_PROFILE:
            return {...state, profile: action.userProfile}
        default:
            return state;
    }
}

export const updateNewPostText = (postText: string) => {
    return ({type: UPDATE_NEW_POST_TEXT, postText: postText} as const)
};
export const addPost = () => {
    return ({type: ADD_POST} as const);
}
export const setUserProfile = (userProfile: ProfileType ) => {
    return ({type: SET_USER_PROFILE, userProfile} as const);
}



export default profileReducer;