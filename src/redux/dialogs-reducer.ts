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

let initialState = {
        messages: [
            {id: 1, messageBody: "Hi! Have a good day!"},
            {id: 2, messageBody: "Good luck!"},
            {id: 3, messageBody: "Good luck!"},
            {id: 4, messageBody: "Be happy!"}
        ] as Array<MessageType>,
        dialogItems: [
            {id: 1, name: "Andrey"},
            {id: 2, name: "Lena"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Olga"},
        ] as Array<DialogItemType>,
        newMessageText: "",
    };

export type InitialStateType = typeof initialState;

const dialogsReducer = (state: InitialStateType  = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: 10, messageBody: state.newMessageText};
            return { ...state, messages:[...state.messages, newMessage], newMessageText:''};
        case UPDATE_NEW_MESSAGE_TEXT:
            if (action.messageText) {
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