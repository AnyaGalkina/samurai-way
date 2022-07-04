import React, {ChangeEvent} from "react";

type PropsType = {
    newMessageText: string;
    addMessage: () => void;
    updateNewMessageText: (newMessageText: string) => void;
}

const DialogTextArea: React.FC<PropsType> = (props) => {

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(event.currentTarget.value);
    }

    const onButtonClickHandler = () => {
        props.addMessage();
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