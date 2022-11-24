import React from 'react';
import {LoginForm} from './LoginForm/LoginForm';
import {AppStateType} from '../../app/redux-store';
import {connect} from 'react-redux';
import {login, logout} from './auth-reducer';
import {Redirect} from 'react-router-dom';
import {ExclamationCircleOutlined} from '@ant-design/icons';
import styles from './Login.module.css';

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

    if (props.isAuth) {
        return <Redirect to={`/profile/${props.userId}`}/>
    }

    return (
        <div>
            <h3>LOG IN</h3>
            <div>
                Use the following data to log in.
                <p style={{margin: 0}}>Log in: <b>anna.blackbird1@gmail.com</b></p>
                <p>Password: <b>Free12345</b></p>
            </div>
            <div className={styles.warningBlock}>
                <ExclamationCircleOutlined style={{color: 'orange', paddingRight: '10px'}}/>
                If you have some issue with log in using Safari, please follow instructions:
                {/*<div style={{paddingRight:'20px'}}>Safari -{'>'} Preferences -{'>'} Privacy -{'>'} Website tracking -{'>'} untick Prevent cross-site*/}
                {/*    tracking</div>*/}
                <div style={{paddingLeft: '25px'}}>
                    Click the Safari menu, you will see the Preferences item - click on it. Then click the Privacy item
                    to see privacy related options. You will see the Website tracking checkbox. Click on Prevent
                    cross-site tracking.
                </div>
            </div>

            <LoginForm
                //@ts-ignore
                captchaUrl={props.captchaUrl}
            />
        </div>
    );
};

export default connect(mapStateToProps, {login, logout})(Login);


