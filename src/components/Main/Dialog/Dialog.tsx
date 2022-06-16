import React from 'react';
import styles from './Dialog.module.css'
import DialogItems from "./DialogItems/DialogItems";
import Message from "./Messages/Message";
import {addMessage, DialogPageType, updateNewMessageText} from "../../../redux/state";
import DialogTextArea from "./DialogTextArea/DialogTextArea";

type PropsType = {
    dialogsPage: DialogPageType;
    addMessage: () => void;
    updateNewMessageText: (newMessageText: string) => void;
}

const Dialog: React.FC<PropsType> = (props) => {

    let dialogList = props.dialogsPage.dialogItems.map(d => <DialogItems key={d.id} name={d.name} id={d.id}/>)

    let messageList = props.dialogsPage.messages.map(m =>  <Message key={m.id} messageBody={m.messageBody}/>)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogList}
            </div>
            <div className={styles.messages}>
                {messageList}
                <DialogTextArea
                    newMessageText={props.dialogsPage.newMessageText}
                    addMessage={addMessage}
                    updateNewMessageText={updateNewMessageText}
                />
            </div>
        </div>
    );
};

export default Dialog;
