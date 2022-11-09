import React from 'react';
import {NavLink} from "react-router-dom";
import Avatar from "../../../common/Avatar/Avatar";
import styles from "./DialogItem.module.css";

type PropsType={
    name: string;
    id: number;
}

const DialogItems = (props: PropsType) => {
    return (
        <div>
            <Avatar src={"https://hw-media.herworld.com/public/girl-with-backpack.jpg"}/>
            <NavLink className={styles.userName} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItems;