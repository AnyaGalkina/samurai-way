import {ActionType,  DialogPageType, } from "./state";
export const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
export const ADD_MESSAGE = "ADD_MESSAGE";


const dialogsReducer = (state:  DialogPageType , action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {id: 10, messageBody: state.newMessageText};
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            if (action.messageText) {
                state.newMessageText = action.messageText;
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