import React, {ChangeEvent} from 'react';
import {ActionType, addMessageAC, updateNewMessageTextAC} from "../../../../redux/state";

type PropsType = {
    newMessageText: string;
    dispatch:(action: ActionType) => void
    // addMessage: () => void;
    // updateNewMessageText: (newMessageText: string) => void;
}

const DialogTextArea: React.FC<PropsType> = (props) => {

    // let newMessageElement = React.createRef<HTMLTextAreaElement>();

    let onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(event.currentTarget.value));
        // props.updateNewMessageText(event.currentTarget.value);
    }

    let onButtonClickHandler = () => {
        // props.addMessage();
        props.dispatch(addMessageAC());
    }

    return (
        <div>
            <textarea
                // ref={newMessageElement}
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