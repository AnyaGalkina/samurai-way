import React, {ChangeEvent} from 'react';

type PropsType = {
    newMessageText: string;
    addMessage: () => void;
    updateNewMessageText: (newMessageText: string) => void;
}

const DialogTextArea: React.FC<PropsType> = (props) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    let onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageText(event.currentTarget.value);
    }

    let onButtonClickHandler = () => {
        props.addMessage();
    }

    return (
        <div>
            <textarea ref={newMessageElement} value={props.newMessageText} onChange={onChangeHandler}></textarea>
            <div>
                <button onClick={onButtonClickHandler}>Add message</button>
            </div>
        </div>
    );
};

export default DialogTextArea;