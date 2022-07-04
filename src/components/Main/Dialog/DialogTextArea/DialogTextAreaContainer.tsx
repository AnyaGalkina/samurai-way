import React from "react";
import {ActionType} from "../../../../redux/redux-store";
import {addMessageAC, DialogPageType, updateNewMessageTextAC} from "../../../../redux/dialogs-reducer";
import DialogTextArea from "./DialogTextArea";

type PropsType = {
    dialogsPage: DialogPageType;
    dispatch: (action: ActionType) => void
}

const DialogTextAreaContainer: React.FC<PropsType> = (props) => {

    const updateNewMessageText = (newMessage: string) => {
        props.dispatch(updateNewMessageTextAC(newMessage));
    }

    const addMessage= () => {
        props.dispatch(addMessageAC());
    }

    return (
        <DialogTextArea newMessageText={props.dialogsPage.newMessageText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>
    );
};

export default DialogTextAreaContainer;