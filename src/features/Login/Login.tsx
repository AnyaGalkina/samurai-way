import React from "react";
import {LoginForm} from "./LoginForm/LoginForm";
import {AppStateType} from "../../app/redux-store";
import {connect} from "react-redux";
import {login, logout} from "./auth-reducer";
import {Redirect} from "react-router-dom";


type MapStateToPropsType = {
    isAuth: boolean;
    captchaUrl: string | null;
    userId: number | null
}

type  MapDispatchToPropsType = {
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

    if(props.isAuth) {
        return <Redirect to={`/profile/${props.userId}`} />
    }

    return (
        <div>
            <h3>LOGIN</h3>
            <div>
                Use the following data to login.
                <p style={{margin:0}}>Login: anna.blackbird1@gmail.com</p>
                <p>Password: Free12345</p>
            </div>
            <LoginForm
                //@ts-ignore
                            captchaUrl={props.captchaUrl}
                        />
        </div>
    );
};

export default connect(mapStateToProps, {login, logout})(Login);


