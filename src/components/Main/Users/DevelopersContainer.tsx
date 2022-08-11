import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
} from "../../../redux/users-reducer";
import {AppStateType} from "../../../redux/redux-store";
import Developers from "./Developers/Developers";
import Preloader from "../../common/Preloader/Preloader";
import {UserType} from "../../../redux/types";
import {usersAPI} from "../../../api/api";


class UsersContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {

    componentDidMount() {
        this.props.setToggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            //@ts-ignore
            .then((response) => {
                debugger
                this.props.setToggleIsFetching(false);
                console.log(response.items);
                console.log(response.totalCount);
                this.props.setUsers(response.items);
                this.props.setTotalUsersCount(response.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setToggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber,this.props.pageSize)
        // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
        //     withCredentials: true,
        // })
            //@ts-ignore
            .then(response => {
                this.props.setToggleIsFetching(false);
                this.props.setUsers(response.items);
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/>
                    :
                    <Developers
                        onPageChanged={this.onPageChanged}
                        users={this.props.users}
                        pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                    />
                }
            </>
        );
    }
}


export type MapStateToPropsType = {
    users: Array<UserType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean
}

export type MapDispatchToPropsType = {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: Array<UserType>) => void;
    setCurrentPage: (currentPage: number) => void;
    setTotalUsersCount: (totalUsersCount: number) => void;
    setToggleIsFetching: (isFetching: boolean) => void;
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export const DevelopersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFetching
})(UsersContainer);
