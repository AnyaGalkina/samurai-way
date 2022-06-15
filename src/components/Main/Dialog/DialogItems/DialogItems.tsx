import React from 'react';
import {NavLink} from "react-router-dom";
import Avatar from "../../Avatar/Avatar";

type PropsType={
    name: string;
    id: number;
}

const DialogItems = (props: PropsType) => {
    return (
        <div>
            <Avatar src={"https://hw-media.herworld.com/public/girl-with-backpack.jpg"}/>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItems;