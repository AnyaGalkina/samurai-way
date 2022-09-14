import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../../utils/validators";
import {Textarea} from "../../../../common/FormsControls/FormsControls";

export type AddMyPostFormDataType = {
    myPostText: string
}

const maxLength50 = maxLengthCreator(50);

export const  AddMyPostForm: React.FC<InjectedFormProps<AddMyPostFormDataType>> = ({handleSubmit}) => {
    return(
        <form onSubmit={handleSubmit}>
            <Field component={Textarea} name={"myPostText"}
                   validate={[maxLength50]}
            />
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

export const ReduxAddMyPostForm = reduxForm<AddMyPostFormDataType>({form: "myPost"})(AddMyPostForm)