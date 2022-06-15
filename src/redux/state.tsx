import {renderEntireTree} from "../render";

export type PostType = {
    id: number;
    likesCounter: number;
    postText: string
}

export type MessageType = {
    id: number;
    messageBody: string
}

export type DialogItemType = {
    id: number;
    name: string
}

export type DialogPageType = {
    messages: Array<MessageType>;
    dialogItems: Array<DialogItemType>
}

export type ProfilePageType = {
    posts: Array<PostType>
}
export type StateType = {
    dialogsPage: DialogPageType;
    profilePage: ProfilePageType
}

export const state: StateType = {
    dialogsPage: {
        messages: [
            {id: 1, messageBody: 'Hi! Have a good day!'},
            {id: 2, messageBody: 'Good luck!'},
            {id: 3, messageBody: 'Good luck!'},
            {id: 4, messageBody: 'Be happy!'}
        ],
        dialogItems: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Lena'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Olga'},
        ]
    },
    profilePage: {
        posts: [
            {id: 1, likesCounter: 120, postText: "Hello! Happy to see you!"},
            {id: 2, likesCounter: 70, postText: "Good luck!"},
        ]
    }
};

export const addPost = (newPostText: string) => {
    let newPost: PostType = {id: 3, likesCounter: 0, postText: newPostText}
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}