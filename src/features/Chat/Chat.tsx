import React, {useEffect} from 'react';
import {AddMessageForm} from './AddMessageForm/AddMessageForm';
import {ChatMessages} from './ChatMessages/ChatMessages';
import {useDispatch} from 'react-redux';
import {startMessagesListerning, stopMessagesListerning} from './chat-reducer';

//
// export type ChatMessageType = {
//     photo: string;
//     userName: string;
//     message: string;
//     userId: number
// }

const Chat = () => {
    const dispatch = useDispatch();
    // const status = useSelector((state: AppStateType) => state.chatPage.status);

    useEffect(() => {
        debugger
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