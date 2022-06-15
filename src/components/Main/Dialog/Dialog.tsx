import React from 'react';
import styles from './Dialog.module.css'
import DialogItems from "./DialogItems/DialogItems";
import Message from "./Messages/Message";
import {DialogPageType} from "../../../redux/state";

type PropsType = {
    dialogsPage: DialogPageType
}

const Dialog: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {props.dialogsPage.dialogItems.map(d => <DialogItems key={d.id} name={d.name} id={d.id}/>)}
            </div>
            <div className={styles.messages}>
                {props.dialogsPage.messages.map(m => <Message key={m.id} messageBody={m.messageBody}/>)}
            </div>
        </div>
    );
};

export default Dialog;
