import React from 'react';
import {Divider, Comment} from 'antd';
import styles from "./Message.module.css";
import defaultUserAvatar from "../../../../assets/images/defaultUserPhoto.jpg";
import Avatar from '../../../../common/components/Avatar/Avatar';
import {ChatMessageType} from '../../chat-reducer';

type PropsType = {
    chatMessage: ChatMessageType
}

export const Message = ({chatMessage}: PropsType) => {
    const {photo, userName, message} = chatMessage;

    return (
        <div className={styles.chatMessageContainer}>
            <Comment
                author={<a>{userName}</a>}
                avatar={<Avatar src={photo ? photo : defaultUserAvatar}/>}
                content={<p>{message}</p>}
            />
            <Divider />
        </div>
    );
};
