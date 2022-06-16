import React from 'react';

type PropsType = {
    messageBody: string;
}
const Message: React.FC<PropsType> = (props) => {

    return (
        <div>
            {props.messageBody}
        </div>
    );
};

export default Message;