import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../../utils/validators";


export type NewMessageFormType = {
    dialogTextArea: string;
}

const maxLength50 = maxLengthCreator(50);

export const DialogTextArea: React.FC<InjectedFormProps<NewMessageFormType>> = (props) => {


    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field
                    name={"dialogTextArea"}
                    component={Textarea}
                    placeholder={"Enter your message text"}
                    validate={[
                        // required,
                        maxLength50]}
                />
                <div>
                    <button>Add message</button>
                </div>
            </form>
        </div>
    );
};

export const ReduxAddMessageForm = reduxForm<NewMessageFormType>({form: "message"})(DialogTextArea)
