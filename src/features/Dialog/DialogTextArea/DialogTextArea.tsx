import React, {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {LimitTextArea} from '../../../common/components/LimitTextArea/LimitTextArea';

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
        </div>
    );
};