import {ActionType} from "./redux-store";

export const ADD_POST = "ADD_POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

export type PostType = {
    id: number;
    likesCounter: number;
    postText: string
}

export type ProfilePageType = {
    posts: Array<PostType>;
    newPostText: string
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, likesCounter: 120, postText: "Hello! Happy to see you!"},
        {id: 2, likesCounter: 70, postText: "Good luck!"},
    ],
    newPostText: "",
}

const profileReducer = (state =  initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {id: 3, likesCounter: 0, postText: state.newPostText}
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            if (action.postText) {
                state.newPostText = action.postText;
            }
            return state;
        default:
            return state;
    }
}

export const updateNewPostTextAC = (postText: string) => {
    return ({type: UPDATE_NEW_POST_TEXT, postText: postText} as const)
};
export const addPostAC = () => {
    return ({type: ADD_POST} as const);
}

export default profileReducer;