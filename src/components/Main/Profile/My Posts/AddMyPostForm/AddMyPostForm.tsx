import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {addPost} from "../../../../../redux/profile-reducer";
import styles from "./AddMyPost.module.css"
import {Button} from "antd";

export type AddMyPostFormDataType = {
    myPostText: string
}

const maxLength100 = 100;

export const AddMyPostForm = () => {
    const dispatch = useDispatch();
    const [currentValue, setCurrentValue] = useState("");


    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentValue(event.target.value);
    }

    const onAddPostClickHandler = () => {
        dispatch(addPost(currentValue));
        setCurrentValue("");
    }
    let limit = maxLength100 - currentValue.length

    return (
        <div className={styles.addPostContainer}>
            <div className={styles.textareaContainer}>
                <textarea maxLength={maxLength100} className={styles.textarea} onChange={onChangeHandler} value={currentValue}/>
                <span className={styles.limit}>{limit}</span>
            </div>
            {limit<0 && <div className={styles.error}><span>Max {maxLength100} symbols</span></div>}
            <div>
                <Button
                    style={{
                        // backgroundColor: "#149AC9"
                        backgroundColor: "#1ac2c1",
                        borderColor: "#1ac2c1",
                    }}
                    type="primary"
                    onClick={onAddPostClickHandler} disabled={limit<0}>Add Post</Button>
            </div>
        </div>
    )
}