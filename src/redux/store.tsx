import profileReducer, {addPostAC, ProfilePageType, updateNewPostTextAC} from "./profile-reducer";
import dialogsReducer, {addMessageAC, DialogPageType, updateNewMessageTextAC} from "./dialogs-reducer";
import {ActionType} from "./redux-store";


export type StateType = {
    dialogsPage: DialogPageType;
    profilePage: ProfilePageType;
}

export type StoreType = {
    _state: StateType;
    _callSubscriber: (state: StateType) => void;
    subscribe: (observer: (state: StateType) => void) => void;
    dispatch: (action: ActionType) => void;
    getState: () => StateType;
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
        },
    getState() {
        return this._state
    }
}