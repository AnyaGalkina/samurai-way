import React, {useEffect} from 'react';
import {AddMessageForm} from './AddMessageForm/AddMessageForm';
import {ChatMessages} from './ChatMessages/ChatMessages';
import {useDispatch} from 'react-redux';
import {startMessagesListerning, stopMessagesListerning} from './chat-reducer';
import {io} from 'socket.io-client';

const socket = io("https://social-network.samuraijs.com/api/1.0");

const Chat = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(startMessagesListerning());
        return () => {
            dispatch(stopMessagesListerning());
        }
    }, []);


    // useEffect(() => {
    //
    //     // wss://social-network.samuraijs.com/handlers/ChatHandler.ashx
    // }, []);


    return (
        <div>
            <ChatMessages />
            <AddMessageForm/>
        </div>
    );
};

export default Chat;