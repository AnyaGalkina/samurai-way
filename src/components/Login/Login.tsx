import React from "react";
import {LoginReduxForm} from "./LoginForm/LoginForm";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

export type FormDataType = {
    login: string;
    password: string;
    rememberMe: boolean;
    captchaUrl: string | null;
}

type MapStateToPropsType = {
    isAuth: boolean;
    captchaUrl: string | null;
    userId: number | null
}

type  MapDispatchToPropsType = {
    login: (login: string, password: string, rememberMe: boolean, captchaUrl?: string) => void;
    logout: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
        userId: state.auth.userId,
    }
}


type OwnProps = MapStateToPropsType & MapDispatchToPropsType;

const Login: React.FC<OwnProps> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        const {login, password, rememberMe, captchaUrl} = formData;
        props.login(login, password, rememberMe,
            //@ts-ignore
            captchaUrl)
    }

    if(props.isAuth) {
        return <Redirect to={`/profile/${props.userId}`} />
    }

    return (
        <div>
            <h3>LOGIN</h3>
            <div>
                Use the following data to login.
                <p style={{margin:0}}>Login:anna.blackbird1@gmail.com</p>
                <p>Password: Free12345</p>
            </div>
            <LoginReduxForm onSubmit={onSubmit}
                //@ts-ignore
                            captchaUrl={props.captchaUrl}/>
        </div>
    );
};

export default connect(mapStateToProps, {login, logout})(Login);


