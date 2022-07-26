import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {AppStateType} from "../../../redux/redux-store";
import {addPost, InitialStateType, updateNewPostText, setUserProfile} from "../../../redux/profile-reducer";
import axios from "axios";
import {ProfileType} from "../../../redux/types";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToPropsType = {
    profilePage: InitialStateType
}

type MapDispatchToPropsType = {
    updateNewPostText: (newPostText: string) => void;
    addPost: () => void;
    setUserProfile: (userProfile: ProfileType ) => void;
}

type PathParamsType = {
    userId: string | undefined
}

export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType;
type WithRouterProps = RouteComponentProps<PathParamsType> &  OwnPropsType;

class ProfileContainer extends React.Component<OwnPropsType> {


    componentDidMount() {

            //@ts-ignore
            let userId = this.props.match.params.userId;
        if(!userId) {
            userId = "2";
        }
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/"+ userId)
            .then((response) => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        console.log(this.props);
        return (
            <Profile {...this.props}/>
        )
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

//@ts-ignore
const ProfileContainerWithUrlData = withRouter(ProfileContainer);

export const ProfileContainerWithConnect = connect
    // <MapStateToPropsType,MapDispatchToPropsType, OwnPropsType, AppStateType>
(mapStateToProps,
    {addPost, updateNewPostText, setUserProfile})(ProfileContainerWithUrlData);