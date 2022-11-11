import {Nullable} from '../../common/types';
import {ChatMessageType} from './chat-reducer';

let subscribers = {
    'message-recived': [] as Array<MessagesRecievedSubscriberType>,
    'status-changed': [] as StatusChangedSubscriberType[]
};

let ws: Nullable<WebSocket>;

type EventsNames = 'message-recived' | 'status-changed';

const onCloseHandler = () => {
    console.log("WS closed");
    setTimeout(createWSChannel, 3000);
}

const onOpenHandler = () => {
    nitifySubscribersAboutStatus('ready');
}

const onErrorHandler = () => {
    nitifySubscribersAboutStatus('error');
    console.log('ERROR, refresh page');
}

let onMessageHandler = (event: MessageEvent) => {
    let newMessages = JSON.parse(event.data);
    subscribers['message-recived'].forEach(s => s(newMessages));
}

const cleanUp = () => {
    ws?.removeEventListener('close', onCloseHandler);
    ws?.removeEventListener('message', onMessageHandler);
    ws?.addEventListener('open', onOpenHandler);
    ws?.addEventListener('error', onErrorHandler);
}

const nitifySubscribersAboutStatus = (status: StatusType) => {
    subscribers['status-changed'].forEach(s =>s(status));
}

function createWSChannel() {
    cleanUp();
    ws?.close();
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    nitifySubscribersAboutStatus('pending');
    ws?.addEventListener('close', onCloseHandler);
    ws?.addEventListener('message', onMessageHandler);
    ws?.addEventListener('open', onOpenHandler);
    ws?.addEventListener('error', onErrorHandler);
}

export const chatAPI = {
    start() {
        createWSChannel();
    },
    stop() {
        subscribers['message-recived'] = [];
        subscribers['status-changed'] = [];
        cleanUp();
        ws?.close();
    },
    subscribe(eventName: EventsNames, callback: MessagesRecievedSubscriberType | StatusChangedSubscriberType) {
        //@ts-ignore
        subscribers[eventName].push(callback);
        return () => {
            //@ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
        }
    },
    unsubscribe(eventName: EventsNames, callback: MessagesRecievedSubscriberType | StatusChangedSubscriberType) {
        // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
    sendMessage(message: string) {
        ws?.send(message);
    }
}

type MessagesRecievedSubscriberType = ((massages: ChatMessageType[]) => void)
type StatusChangedSubscriberType = ((status: StatusType) => void)

export type StatusType = 'pending' | 'ready' | 'error';

export type ChatMessageAPIType = {
    message: string;
    photo: string;
    userId: number;
    userName: string
}


// type SubscriberType = (messages: ChatMessageType[]) => void
//
// let subscribers = [] as SubscriberType[];
//
// let ws: WebSocket;
//
// const closeHandler = () => {
//     console.log('closed')
//     setTimeout(createChannel, 3000);
// }
//
// const createChannel = () => {
//     ws.removeEventListener('close', closeHandler);
//     ws.close();
//     ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
//     ws.addEventListener('close', closeHandler);
// }
//
// let sendMessageHandler = (event: MessageEvent) => {
//     const newMessages = JSON.parse(event.data);
//     subscribers.forEach(s => s(newMessages));
// }
//
// export const chatAPI = {
//     subscribe(callback: SubscriberType) {
//         subscribers.push(callback);
//         return () => {
//             subscribers = subscribers.filter(s => s !== callback)
//         }
//     },
//     unsubscribe(callback: SubscriberType) {
//         return () => {
//             subscribers = subscribers.filter(s => s !== callback)
//         }
//     }
// }