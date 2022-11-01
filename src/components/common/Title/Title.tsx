import React from "react";
import styles from "./Title.module.css";

type PropsType = { title: string }
export const Title = ({title}: PropsType) => {
    return (
        <h2 className={styles.title}>{title}</h2>
    );
};