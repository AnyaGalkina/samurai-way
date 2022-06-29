import React, {ChangeEvent, KeyboardEvent} from "react";
import {ActionType} from "../../../../redux/redux-store";
import {addMessageAC, updateNewMessageTextAC} from "../../../../redux/dialogs-reducer";

type PropsType = {
    newMessageText: string;
    dispatch: (action: ActionType) => void
    // addMessage: () => void;
    // updateNewMessageText: (newMessageText: string) => void;
}

const DialogTextArea: React.FC<PropsType> = (props) => {

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(event.currentTarget.value));
        // props.updateNewMessageText(event.currentTarget.value);
    }

    const onButtonClickHandler = () => {
        // props.addMessage();
        props.dispatch(addMessageAC());
    }

    return (
        <div>
            <textarea
                value={props.newMessageText}
                onChange={onChangeHandler}>
            </textarea>
            <div>
                <button onClick={onButtonClickHandler}>Add message</button>
            </div>
        </div>
    );
};

export default DialogTextArea;