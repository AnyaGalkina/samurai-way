import {ActionType } from "./redux-store";


export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
export const ADD_MESSAGE = "ADD_MESSAGE";

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

let initialState: DialogPageType  = {
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
    };

const dialogsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: 10, messageBody: state.newMessageText};
            // state.messages.push(newMessage);
            // state.newMessageText = "";
            return { ...state, messages:[...state.messages, newMessage], newMessageText:''};
        case UPDATE_NEW_MESSAGE_TEXT:
            if (action.messageText) {
                // state.newMessageText = action.messageText;
                return {...state, newMessageText: action.messageText};
            }
            return state;
        default:
            return state;
    }
}

export const updateNewMessageTextAC = (messageText: string) => {
    return ({type: UPDATE_NEW_MESSAGE_TEXT, messageText: messageText} as const);
};
export const addMessageAC = () => {
    return ({type: ADD_MESSAGE} as const);
};


export default dialogsReducer;