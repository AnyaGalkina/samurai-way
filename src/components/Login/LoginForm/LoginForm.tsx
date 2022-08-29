import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormDataType} from "../Login";
import {Input} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators";


const maxLength = maxLengthCreator(50);
const minLength = minLengthCreator(8);

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input}
                       validate={[required, maxLength]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input}
                       validate={[required, minLength]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>remember me
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}


export const LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)