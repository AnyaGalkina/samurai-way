import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {AppStateType} from "../../app/redux-store";
import {
    getUserProfile,
    getUserStatus,
    InitialStateType,
    savePhoto,
    updateUserStatus
} from "./profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../common/hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    profilePage: InitialStateType;
    status: string;
    isAuth: boolean;
    authorizedUserId: number | null;
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => void;
    getUserStatus: (userId: number) => void;
    updateUserStatus: (status: string) => void;
    savePhoto: (photoFile: File) => void;
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        isAuth: state.auth.isAuth,
        status: state.profilePage.userStatus,
        authorizedUserId: state.auth.userId
    }
}

type PathParamsType = {
    userId: string
}
export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<OwnPropsType> {

    refreshProfile() {
        let userId = +this.props.match.params.userId;
        if (!userId && this.props.authorizedUserId) {
            userId = this.props.authorizedUserId;
        }
        console.log(userId, this.props.authorizedUserId)
        this.props.getUserProfile(+userId);
        setTimeout(() => {
            this.props.getUserStatus(+userId);
        }, 1000)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: OwnPropsType ){
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                isOwner={+this.props.match.params.userId === this.props.authorizedUserId}
                status={this.props.status}
                profilePage={this.props.profilePage}
                updateUserStatus={this.props.updateUserStatus}
                savePhoto={this.props.savePhoto}
            />
        )
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)
