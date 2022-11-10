import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {LimitTextArea} from '../../../common/LimitTextArea/LimitTextArea';

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

    return (
        <div>
            <LimitTextArea buttonTitle={'Add message'}
                          onButtonClickHandler={onAddMessageClickHandler}
                           maxLength={maxLength100}
                           value={currentValue}
                           onChangeHandler={onChangeHandler}
            />
            {/*<div>*/}
            {/*    <Button*/}
            {/*        style={{*/}
            {/*            // backgroundColor: "#149AC9"*/}
            {/*            backgroundColor: "#1ac2c1",*/}
            {/*            borderColor: "#1ac2c1",*/}
            {/*        }}*/}
            {/*        type="primary"*/}
            {/*        onClick={onAddMessageClickHandler} disabled={limit<0}>Add message</Button>*/}
            {/*</div>*/}
        </div>
    );
};