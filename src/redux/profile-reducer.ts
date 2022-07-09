import {ActionType} from "./redux-store";

export const ADD_POST = "ADD_POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

export type PostType = {
    id: number;
    likesCounter: number;
    postText: string
}

let initialState = {
    posts: [
        {id: 1, likesCounter: 120, postText: "Hello! Happy to see you!"},
        {id: 2, likesCounter: 70, postText: "Good luck!"},
    ] as Array<PostType>,
    newPostText: "",
}

export type InitialStateType = typeof initialState;

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