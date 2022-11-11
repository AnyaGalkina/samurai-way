import React, {Component, ComponentType} from "react";
import {Redirect, useParams, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../../app/redux-store";
import { compose } from "redux";

let mapStateToPropsWithRedirect = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    isFetching:state.auth.isFetching
});

type MapStateToPropsType = {
    isAuth: boolean
    isFetching:boolean
}

export function withAuthRedirect <T> (Component: ComponentType<T>) {

    function RedirectComponent(props: MapStateToPropsType) {
        let {isAuth, isFetching,...restProps} = props;
        if (!isAuth && !isFetching) return <Redirect to={"/login"}/>
        return (
            <Component {...restProps as T}/>
        );
    }

    return connect(mapStateToPropsWithRedirect, {})(RedirectComponent);
}