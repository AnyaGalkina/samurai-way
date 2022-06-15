import React from 'react';

type PropsType = {
    messageBody: string
}
const Message = (props: PropsType) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    return (
        <div>
            <div>{props.messageBody}</div>
            <textarea ref={newMessageElement}></textarea>
        </div>
    );
};

export default Message;