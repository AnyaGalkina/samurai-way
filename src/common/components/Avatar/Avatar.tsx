import React from "react";
import styles from "./Avatar.module.css";

type PropsType = {
    src: string;
    avaStyles?: string
}

const Avatar: React.FC<PropsType> = ({src, avaStyles}) => {
    return (
            <img src={src} alt='avatar' className={avaStyles || styles.avatar}></img>
    );
};

export default Avatar;
