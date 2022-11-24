import React, {useEffect, useRef, useState} from 'react';
import {Message} from './Message/Message';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../app/redux-store';

type PropsType = {}

export const ChatMessages = ({}: PropsType) => {
    const messagesAnchorRef = useRef<HTMLDivElement>(null);
    const messages = useSelector((state: AppStateType) => { return state.chatPage.messages });
    const [autoScrollIsActive, setAutoScroll] = useState(false);
    const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const element = e.currentTarget;
        if (Math.abs((element.scrollHeight - element.scrollTop) - element.clientHeight) < 300) {
            setAutoScroll(true);
        } else {
            setAutoScroll(false);
        }
    }

    useEffect(() => {
        if (autoScrollIsActive) {
            messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' })
            messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
    }, [messages]);

    return (
        <div>
            {messages.map((message, index) => {
                return <Message key={index} chatMessage={message}/>
            })}
        </div>
    );
};
