import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {AppStateType} from "../../../redux/redux-store";
import {getUserProfile, InitialStateType} from "../../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    profilePage: InitialStateType;
    isAuth: boolean;
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: number) => any;
}

type PathParamsType = {
    userId: string | undefined
}

export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType;
type WithRouterProps = RouteComponentProps<PathParamsType> & OwnPropsType;

class ProfileContainer extends React.Component<OwnPropsType> {


    componentDidMount() {
        //@ts-ignore
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2";
        }

        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage,
        isAuth: state.auth.isAuth
    }
}
// let  AuthRedirectComponent = withAuthRedirect(ProfileContainer);

export default compose(
    connect
        // <MapStateToPropsType,MapDispatchToPropsType, OwnPropsType, AppStateType>
        (mapStateToProps,
            {getUserProfile}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)

//@ts-ignore
// const ProfileContainerWithUrlData = withRouter(AuthRedirectComponent);

// export const ProfileContainerWithConnect = connect
//     // <MapStateToPropsType,MapDispatchToPropsType, OwnPropsType, AppStateType>
//     (mapStateToProps,
//         {addPost, updateNewPostText, getUserProfile})(ProfileContainerWithUrlData);