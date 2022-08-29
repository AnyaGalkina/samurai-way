import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export type NewMessageFormType = {
    dialogTextArea: string;
}

const DialogTextArea: React.FC<InjectedFormProps<NewMessageFormType>> = (props) => {

    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field
                    name={"dialogTextArea"}
                    component={"textarea"}
                    placeholder={"Enter your message text"}
                />
                <div>
                    <button>Add message</button>
                </div>
            </form>
        </div>
    );
};

export default DialogTextArea;

export const ReduxAddMessageForm = reduxForm<NewMessageFormType>({form: "message"})(DialogTextArea)
