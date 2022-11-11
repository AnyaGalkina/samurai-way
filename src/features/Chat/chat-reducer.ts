import {ActionType, ThunkType} from '../../app/redux-store';
import {chatAPI, ChatMessageAPIType, StatusType} from './chat-api';
import {setAppStatus, setGlobalError} from '../../app/app-reducer';
import {Dispatch} from 'redux';
import {v1} from 'uuid';

const SET_MESSAGES = 'CHAT/SET_MESSAGES';
const SET_STATUS = 'CHAT/SET_STATUS';

const pending: StatusType = 'pending';

export type InitialStateType = typeof initialState;
export type ChatMessageType = ChatMessageAPIType & { id: string };

let initialState = {
    messages: [] as ChatMessageType[],
    status: pending as StatusType
}

const chatReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_MESSAGES:
            return {
                ...state,
                //@ts-ignore
                // messages: action.payload.status
                //@ts-ignore
                messages: [...state.messages, ...action.payload.messages.map(m => ({...m, id: v1()}))]
                    .filter((m, index, array) => index >= array.length - 100)
            }
        case SET_STATUS:
            return {
            ...state,
            //@ts-ignore
            status: action.payload.status
        }
        default:
            return state;
    }
}

export const setChatMessages = (messages: ChatMessageType[]) => {
    return {type: 'CHAT/SET_MESSAGES' as const, payload: {messages}}
};
export const statusChanged = (status: StatusType) => {
    return {type: 'CHAT/SET_STATUS' as const, payload: {status}}
};

let _newMessageHandler: ((messages: Array<ChatMessageType>) => void) | null = null;

const newMassegeHandlerCreator = (dispatch: Dispatch) => {
    debugger
    if (_newMessageHandler === null) {
        _newMessageHandler = (messages) => {
            dispatch(setChatMessages(messages));
        }
    }
    return _newMessageHandler
}


let _statusChangedHandler: ((status: StatusType) => void) | null = null;

const statusChangedHandlerCreator = (dispatch: Dispatch) => {
    if (_statusChangedHandler === null) {
        _statusChangedHandler = (status) => {
            dispatch(statusChanged(status));
        }
    }
    return _statusChangedHandler
}

export const startMessagesListerning = (): ThunkType => async (dispatch) => {
    chatAPI.start();
    chatAPI.subscribe('message-recived', newMassegeHandlerCreator(dispatch));
    chatAPI.subscribe('status-changed', statusChangedHandlerCreator(dispatch))
}

export const stopMessagesListerning = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe('message-recived', newMassegeHandlerCreator(dispatch));
    chatAPI.unsubscribe('status-changed', statusChangedHandlerCreator(dispatch));
    chatAPI.stop();
}

export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message);
}

export default chatReducer;