import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

let mapStateToPropsWithRedirect = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
});

type MapStateToPropsType = {
    isAuth: boolean
}

type MapDispatchToPropsType = {};

export const withAuthRedirect = (Component: any) => {
    class RedirectComponent extends React.Component<MapStateToPropsType, MapDispatchToPropsType> {

        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>

            return (
                <Component {...this.props}/>
            );
        }
    }
    return connect(mapStateToPropsWithRedirect, {})(RedirectComponent);
}