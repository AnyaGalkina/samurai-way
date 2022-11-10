import React, {ChangeEvent, useState} from 'react';
import {wsChannel} from '../Chat';
import {LimitTextArea} from '../../../common/LimitTextArea/LimitTextArea';

export const AddMessageForm = () => {
    const [message, setMessage] = useState('');

    const onChangeHandler = ( event: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.currentTarget.value)
    };

    const sendMessageHandler = () => {
        if (message) {
            wsChannel.send(message);
        } else {
            return;
        }
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
