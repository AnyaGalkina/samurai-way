import React, {useEffect} from 'react';
import {AddMessageForm} from './AddMessageForm/AddMessageForm';
import {ChatMessages} from './ChatMessages/ChatMessages';

export const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

export type ChatMessageType = {
    photo: string;
    userName: string;
    message: string;
    userId: number
}

const Chat = () => {

    return (
        <div>
            <ChatMessages />
            <AddMessageForm/>
        </div>
    );
};

export default Chat;