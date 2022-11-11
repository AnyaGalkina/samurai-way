import React, {ChangeEvent, useState} from 'react';
import {LimitTextArea} from '../../../common/components/LimitTextArea/LimitTextArea';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../app/redux-store';
import {sendMessage} from '../chat-reducer';

type PropsType = {}

export const AddMessageForm = ({}: PropsType) => {
    const dispatch = useDispatch();
    // const status = useSelector((state: AppStateType) => state.chatPage.status);
    const [message, setMessage] = useState('');


    const onChangeHandler = ( event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.currentTarget.value)
    };

    const sendMessageHandler = () => {
        if (!message) {
            return;
        }
        dispatch(sendMessage(message));
        setMessage("");
    }

    return (
        <div>
            <div>
                <LimitTextArea buttonTitle={'Send'}
                               maxLength={100}
                               value={message}
                               onChangeHandler={onChangeHandler}
                               onButtonClickHandler={sendMessageHandler}
                />
            </div>
        </div>
    );
};
