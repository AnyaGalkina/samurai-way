import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {addPost} from "../../profile-reducer";
import styles from "./AddMyPost.module.css"
import {LimitTextArea} from '../../../../common/components/LimitTextArea/LimitTextArea';

const maxLength200 = 200;

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

    return (
        <div className={styles.addPostContainer}>
            <LimitTextArea maxLength={maxLength200}
                           value={currentValue}
                           buttonTitle={"Add Post"}
                           onChangeHandler={onChangeHandler}
                           onButtonClickHandler={onAddPostClickHandler}
            />
        </div>
    )
}