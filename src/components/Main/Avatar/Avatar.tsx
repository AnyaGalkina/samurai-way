import React from "react";
import styles from "./Avatar.module.css";

type PropsType = {
    src: string;
}

const Avatar: React.FC<PropsType> = (props) => {
    return (
            <img src={props.src} alt='avatar' className={styles.avatar}></img>
    );
};

export default Avatar;
