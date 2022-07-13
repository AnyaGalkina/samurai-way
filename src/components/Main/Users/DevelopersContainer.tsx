import React from "react";
import Developers from "./DevelopersClass";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from "../../../redux/users-reducer";
import {AppStateType} from "../../../redux/redux-store";

export type MapStateToPropsType = {
    users: Array<UserType>
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void
}

export type DevelopersPropsType = MapStateToPropsType & MapDispatchToPropsType;


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const DevelopersContainer = connect(mapStateToProps, mapDispatchToProps)(Developers);