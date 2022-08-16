import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

let mapStateToPropsWithRedirect = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth
});

type MapStateToPropsType = {
    isAuth: boolean
}

export function withAuthRedirect <T> (Component: ComponentType<T>) {

    function RedirectComponent(props: MapStateToPropsType) {
        let {isAuth, ...restProps} = props;
        if (!isAuth) return <Redirect to={"/login"}/>
        return (
            <Component {...restProps as T}/>
        );
    }

    return connect(mapStateToPropsWithRedirect, {})(RedirectComponent);
}