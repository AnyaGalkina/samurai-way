import React, {useEffect, useState} from 'react';
import {Message} from './Message/Message';
import {ChatMessageType, wsChannel} from '../Chat';

export const ChatMessages = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([]);

    useEffect(() => {
        wsChannel.addEventListener('message', (event) => {
            let newMassegase = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, ...newMassegase ]);
        });
    }, [])

    return (
        <div>
            {messages.map((message: ChatMessageType) => {
                return <Message key={message.userId} chatMessage={message}/>
            })}
        </div>
    );
};
