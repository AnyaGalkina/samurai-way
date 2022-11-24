import React, {useEffect} from 'react';
import {AddMessageForm} from './AddMessageForm/AddMessageForm';
import {ChatMessages} from './ChatMessages/ChatMessages';
import {useDispatch} from 'react-redux';
import {startMessagesListerning, stopMessagesListerning} from './chat-reducer';


const Chat = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startMessagesListerning());
        return () => {
            dispatch(stopMessagesListerning());
        }
    }, []);

    return (
        <div>
            <ChatMessages />
            <AddMessageForm/>
        </div>
    );
};

export default Chat;