import React, {ChangeEvent, useState} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators";
import styles from "../../Profile/My Posts/AddMyPostForm/AddMyPost.module.css";
import {Button} from "antd";
import {useDispatch} from "react-redux";
import {addPost} from "../../../../redux/profile-reducer";


// export type NewMessageFormType = {
//     dialogTextArea: string;
// }

type PropsType = {
    addMessage: (message: string) => void
}


const maxLength100 = 100;

export const DialogTextArea = ({addMessage}: PropsType) => {
    const dispatch = useDispatch();
    const [currentValue, setCurrentValue] = useState("");


    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setCurrentValue(event.target.value);
    }

    const onAddMessageClickHandler = () => {
        dispatch(addMessage(currentValue));
        setCurrentValue("");
    }
    let limit = maxLength100 - currentValue.length

    return (
        <div>
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
                    onClick={onAddMessageClickHandler} disabled={limit<0}>Add message</Button>
            </div>
        </div>
    );
};