import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../../app/redux-store";
import {logout} from "../../../features/Login/auth-reducer";

type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null,
    // userPhotoSmall?: string | null
    // id: number | null
}

type MapDispatchToPropsType = {
    logout: () => void
}

type OwnProps = MapStateToPropsType & MapDispatchToPropsType;

class HeaderContainer extends React.Component<OwnProps> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        // id: state.auth.userId,
        // userPhotoSmall: state.profilePage.profile?.photos.small
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer)