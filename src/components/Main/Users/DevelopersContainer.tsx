import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {FiltersType, follow, getUsers, unfollow} from '../../../redux/users-reducer';
import {AppStateType} from "../../../redux/redux-store";
import Developers from "./Developers/Developers";
import Preloader from "../../common/Preloader/Preloader";
import {UserType} from "../../../redux/types";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage, getFilters,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getUsersSelector
} from '../../../redux/users-selectors';


class UsersContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize, {term:'', friend: null});
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize, this.props.filters);
    }

    onFiltersChanged = (filters: FiltersType) => {
        const {pageSize} = this.props;
        this.props.getUsers(1, pageSize, filters);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/>
                    :
                    <Developers
                        onPageChanged={this.onPageChanged}
                        onFiltersChanged={this.onFiltersChanged}
                        users={this.props.users}
                        filters={this.props.filters}
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
    filters: FiltersType
    followingInProgress: Array<number>
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    getUsers: (currentPage: number, pageSize: number, filters: FiltersType) => void;
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        filters: getFilters(state),
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export const DevelopersContainer = compose<ComponentType>(
    connect(mapStateToProps, {follow, unfollow, getUsers}),
    withAuthRedirect
)(UsersContainer);
