import React from "react";
import styles from "./Dialog.module.css"
import DialogItems from "./DialogItems/DialogItems";
import Message from "./Messages/Message";
import {DialogPropsType} from "./DialogContainer";
import {NewMessageFormType, ReduxAddMessageForm} from "./DialogTextArea/DialogTextArea";


const Dialog: React.FC<DialogPropsType> = (props) => {

    let dialogList = props.dialogsPage.dialogItems.map(d => <DialogItems key={d.id} name={d.name} id={d.id}/>)

    let messageList = props.dialogsPage.messages.map(m => <Message key={m.id} messageBody={m.messageBody}/>)
    const onSubmit = (formData: NewMessageFormType) => {
        props.addMessage(formData.dialogTextArea)
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogList}
            </div>
            <div className={styles.messages}>
                {messageList}
                <ReduxAddMessageForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

export default Dialog;
