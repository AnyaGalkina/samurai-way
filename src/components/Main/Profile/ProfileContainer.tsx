import React, {ComponentType} from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {AppStateType} from "../../../redux/redux-store";
import {getUserProfile, getUserStatus, InitialStateType, updateUserStatus} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    profilePage: InitialStateType;
    status: string;
    isAuth: boolean;
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => any;
    getUserStatus: (userId: number) => any;
    updateUserStatus: ( status: string ) => any;
}

type PathParamsType = {
    userId: string
}
export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<OwnPropsType> {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "19305";
        }

        this.props.getUserProfile(+userId);
        setTimeout(()=>{
            this.props.getUserStatus(+userId);
        }, 1000)
    }

    render() {
        return (
            <Profile
                status={this.props.status}
                profilePage={this.props.profilePage}
                updateUserStatus={this.props.updateUserStatus}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        isAuth: state.auth.isAuth,
        status: state.profilePage.userStatus,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)
