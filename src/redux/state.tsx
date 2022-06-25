// let renderEntireTree = () => {};

export const ADD_POST = "ADD_POST";
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
export const ADD_MESSAGE = "ADD_MESSAGE";

export
type PostType = {
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
    dialogItems: Array<DialogItemType>;
    newMessageText: string;
}

export type ProfilePageType = {
    posts: Array<PostType>;
    newPostText: string
}
export type StateType = {
    dialogsPage: DialogPageType;
    profilePage: ProfilePageType;
}

export type StoreType = {
    _state: StateType;
    _callSubscriber: (state: StateType) => void;
    subscribe: (observer: (state: StateType) => void) => void;
    dispatch: (action: ActionType) => void;
    // addPost: () => void;
    // addMessage: () => void;
    // updateNewPostText: (newPostText: string) => void;
    // updateNewMessageText: (newMessageText: string) => void;
    getState: () => StateType;
}
export type ActionType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC> | ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageTextAC>;

export const updateNewMessageTextAC = (messageText: string) => {
    return ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: messageText} as const);
};
export const addMessageAC = () => {
    return ({type: ADD_MESSAGE} as const);
};
export const updateNewPostTextAC = (postText: string) => {
    return ({type: UPDATE_NEW_POST_TEXT, postText: postText} as const)
};
export const addPostAC = () => {
    return ({type: ADD_POST} as const);
}


export let store: StoreType = {
    _state: {
        dialogsPage: {
            messages: [
                {id: 1, messageBody: "Hi! Have a good day!"},
                {id: 2, messageBody: "Good luck!"},
                {id: 3, messageBody: "Good luck!"},
                {id: 4, messageBody: "Be happy!"}
            ],
            dialogItems: [
                {id: 1, name: "Andrey"},
                {id: 2, name: "Lena"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Olga"},
            ],
            newMessageText: "",
        },
        profilePage: {
            posts: [
                {id: 1, likesCounter: 120, postText: "Hello! Happy to see you!"},
                {id: 2, likesCounter: 70, postText: "Good luck!"},
            ],
            newPostText: "",
        }
    },
    _callSubscriber: (state: StateType) => {
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // addPost() {
    //     let newPost: PostType = {id: 3, likesCounter: 0, postText: this._state.profilePage.newPostText}
    //     this._state.profilePage.posts.push(newPost);
    //     this.updateNewPostText('');
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newPostText) {
    //     this._state.profilePage.newPostText = newPostText;
    //     // this._renderEntireTree();
    //     this._callSubscriber(this._state);
    // },
    // addMessage() {
    //     let newMessage = {id: 10, messageBody: this._state.dialogsPage.newMessageText};
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this.updateNewMessageText('');
    //     this._renderEntireTree(this._state);
    // },
    //
    // updateNewMessageText(newMessageText) {
    //     this._state.dialogsPage.newMessageText = newMessageText;
    //     this._renderEntireTree(this._state);
    // },

    dispatch(action) {
        // debugger;

        switch (action.type) {
            // @ts-ignore

            case ADD_POST:
                let newPost: PostType = {id: 3, likesCounter: 0, postText: this._state.profilePage.newPostText}
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = "";
                this._callSubscriber(this._state);
            // @ts-ignore

            case ADD_MESSAGE:
                let newMessage = {id: 10, messageBody: this._state.dialogsPage.newMessageText};
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageText = "";
                this._callSubscriber(this._state);
            // @ts-ignore

            case UPDATE_NEW_POST_TEXT:
                // @ts-ignore
                if (action.postText) {
                    // @ts-ignore
                    this._state.profilePage.newPostText = action.postText;
                    this._callSubscriber(this._state);
                }
            // @ts-ignore
            case UPDATE_NEW_MESSAGE_TEXT:
                // @ts-ignore
                if (action.messageText) {
                    // @ts-ignore
                    this._state.dialogsPage.newMessageText = action.messageText;
                    this._callSubscriber(this._state);
                }
            default:
                break;
        }
    },
    getState() {
        return this._state
    }
}
//window ?

// export const state: StateType = {
//     dialogsPage: {
//         messages: [
//             {id: 1, messageBody: 'Hi! Have a good day!'},
//             {id: 2, messageBody: 'Good luck!'},
//             {id: 3, messageBody: 'Good luck!'},
//             {id: 4, messageBody: 'Be happy!'}
//         ],
//         dialogItems: [
//             {id: 1, name: 'Andrey'},
//             {id: 2, name: 'Lena'},
//             {id: 3, name: 'Sveta'},
//             {id: 4, name: 'Olga'},
//         ],
//         newMessageText: '',
//     },
//     profilePage: {
//         posts: [
//             {id: 1, likesCounter: 120, postText: "Hello! Happy to see you!"},
//             {id: 2, likesCounter: 70, postText: "Good luck!"},
//         ],
//         newPostText: '',
//     }
// };

// export const subscribe = (observer: () => void)  => {
//     renderEntireTree = observer;
// }
//
// export const addPost = (): void => {
//     let newPost: PostType = {id: 3, likesCounter: 0, postText: state.profilePage.newPostText}
//     state.profilePage.posts.push(newPost);
//     updateNewPostText('');
//     renderEntireTree();
// }
//
// export const updateNewPostText = (newPostText: string): void => {
//     state.profilePage.newPostText = newPostText;
//     renderEntireTree();
// }
//
// export const addMessage = () => {
//     let newMessage = {id: 10, messageBody: state.dialogsPage.newMessageText};
//     state.dialogsPage.messages.push(newMessage);
//     updateNewMessageText('');
//     renderEntireTree();
// }
//
// export const updateNewMessageText = (newMessageText: string): void => {
//     state.dialogsPage.newMessageText = newMessageText;
//     renderEntireTree();
// }