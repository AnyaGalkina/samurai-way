import React, {ChangeEvent} from 'react';
import styles from '../../../features/Profile/My Posts/AddMyPostForm/AddMyPost.module.css';
import {Button} from 'antd';

type PropsType = {
    maxLength: number;
    value: string;
    buttonTitle: string;
    onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onButtonClickHandler: () => void;
}

export const LimitTextArea = ({ maxLength, value, buttonTitle, onChangeHandler, onButtonClickHandler}: PropsType) => {
    let limit = maxLength - value.length

    return (
        <div>
            <div className={styles.textareaContainer}>
            <textarea maxLength={maxLength} className={styles.textarea} onChange={onChangeHandler}
                      value={value}/>
                <span className={styles.limit}>{limit}</span>
            </div>
            {limit < 0 && <div className={styles.error}><span>Max {maxLength} symbols</span></div>}
            <div>
                <Button
                    style={{
                        backgroundColor: "#1ac2c1",
                        borderColor: "#1ac2c1",
                    }}
                    type="primary"
                    onClick={onButtonClickHandler} disabled={limit<0}>{buttonTitle}
                </Button>
            </div>
        </div>
    );
};