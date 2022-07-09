import {connect} from "react-redux";
import Profile from "./Profile";
import {AppStateType} from "../../../redux/redux-store";
import {addPostAC, InitialStateType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    profilePage: InitialStateType
}

type MapDispatchToPropsType = {
    updateNewPostText: (newPostText: string) => void;
    addPost: () => void;
}

export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType  => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType  => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        updateNewPostText: (newPostText: string) => {
            dispatch(updateNewPostTextAC(newPostText));
        }
    }
}


export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);