import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {follow, getUsers, unfollow,} from "../../../redux/users-reducer";
import {AppStateType} from "../../../redux/redux-store";
import Developers from "./Developers/Developers";
import Preloader from "../../common/Preloader/Preloader";
import {UserType} from "../../../redux/types";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class UsersContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        debugger
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/>
                    :
                    <Developers
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        currentPage={this.props.currentPage}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        followingInProgress={this.props.followingInProgress}
                    />
                }
            </>
        );
    }
}


export type MapStateToPropsType = {
    users: Array<UserType>;
    pageSize: number;
    currentPage: number;
    isFetching: boolean;
    followingInProgress: Array<number>
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => any;
    unfollow: (userId: number) => any;
    getUsers: (currentPage: number, pageSize: number) => any
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export const DevelopersContainer = compose<ComponentType>(
    connect(mapStateToProps, {follow, unfollow, getUsers}),
    withAuthRedirect
)(UsersContainer);
