import React from "react";
import {LoginReduxForm} from "./LoginForm/LoginForm";
import store, {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

export type FormDataType = {
    login: string;
    password: string;
    rememberMe: boolean
}

type MapStateToPropsType = {
    isAuth: boolean
}

type  MapDispatchToPropsType = {
    login: (login: string, password: string, rememberMe: boolean) => void;
    logout: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}


type OwnProps = MapStateToPropsType & MapDispatchToPropsType;

const Login: React.FC<OwnProps> = (props) => {
    const onSubmit = (formData: FormDataType) => {
        const {login, password, rememberMe} = formData;
        props.login(login, password, rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h3>LOGIN</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default connect(mapStateToProps, {login, logout})(Login);


