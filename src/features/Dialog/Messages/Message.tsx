import React from 'react';

type PropsType = {
    messageBody: string;
}
const Message: React.FC<PropsType> = (props) => {

    return (
        <div style={{width: '290px', wordWrap: 'break-word'}}>
            {props.messageBody}
        </div>
    );
};

export default Message;