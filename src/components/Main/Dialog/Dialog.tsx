import React from "react";
import styles from "./Dialog.module.css"
import DialogItems from "./DialogItems/DialogItems";
import Message from "./Messages/Message";
import DialogTextAreaContainer from "./DialogTextArea/DialogTextAreaContainer";
import {DialogPropsType} from "./DialogContainer";
import {Redirect} from "react-router-dom";


const Dialog: React.FC<DialogPropsType> = (props) => {

    let dialogList = props.dialogsPage.dialogItems.map(d => <DialogItems key={d.id} name={d.name} id={d.id}/>)

    let messageList = props.dialogsPage.messages.map(m => <Message key={m.id} messageBody={m.messageBody}/>)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogList}
            </div>
            <div className={styles.messages}>
                {messageList}
                <DialogTextAreaContainer/>
            </div>
        </div>
    );
};

export default Dialog;
