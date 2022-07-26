import React from "react";
import { AppStateType} from "../../../../redux/redux-store";
import {addMessage,  updateNewMessageText} from "../../../../redux/dialogs-reducer";
import DialogTextArea from "./DialogTextArea";
import {connect} from "react-redux";

const mapStateToProps = (state: AppStateType) => {
    return {
        newMessageText: state.dialogPage.newMessageText,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageText: (newMessage: string) => {
            dispatch(updateNewMessageText(newMessage));
        },
        addMessage: () => {
            dispatch(addMessage());
        }
    }
}

const DialogTextAreaContainer = connect(mapStateToProps, mapDispatchToProps)(DialogTextArea);
export default DialogTextAreaContainer;