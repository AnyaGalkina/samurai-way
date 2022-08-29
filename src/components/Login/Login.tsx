import React from "react";
import {LoginReduxForm} from "./LoginForm/LoginForm";
import store from "../../redux/redux-store";

export type FormDataType = {
    login: string;
    password: string;
    rememberMe: boolean
}


const Login = () => {
   const onSubmit = (formData: FormDataType) => {
        console.log(formData);
    }
    console.log(store.getState().form)
    return (
        <div>
            <h3>LOGIN</h3>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;

