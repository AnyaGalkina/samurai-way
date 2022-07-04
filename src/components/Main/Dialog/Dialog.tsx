import React from 'react';
import styles from './Dialog.module.css'
import DialogItems from "./DialogItems/DialogItems";
import Message from "./Messages/Message";
import {ActionType} from "../../../redux/redux-store";
import {DialogPageType} from "../../../redux/dialogs-reducer";
import DialogTextAreaContainer from "./DialogTextArea/DialogTextAreaContainer";

type PropsType = {
    dialogsPage: DialogPageType;
    dispatch:(action: ActionType) => void
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
                <DialogTextAreaContainer
                    dialogsPage={props.dialogsPage}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    );
};

export default Dialog;
