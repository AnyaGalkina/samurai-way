import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setToggleIsFetchingAuth, setAuthUserData,} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../redux/types";
import {setUserProfile} from "../../redux/profile-reducer";

type MapStateToPropsType = {
    isAuth: boolean,
    login: string | null,
    // userPhotoSmall?: string | null
    // id: number | null
}

type MapDispatchToPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void;
    setToggleIsFetchingAuth: (isFetching: boolean) => void;
    // setUserProfile: (userProfile: ProfileType ) => void;
}

type OwnProps =  MapStateToPropsType & MapDispatchToPropsType;



class HeaderContainer extends React.Component<OwnProps> {
    componentDidMount() {
        this.props.setToggleIsFetchingAuth(true);
        axios.get("https://social-network.samuraijs.com/api/1.0//auth/me", {
            withCredentials: true
        })
            .then((response) => {
                let {id, email, login} = response.data.data;
                this.props.setToggleIsFetchingAuth(false)
                if(response.data.resultCode === 0) {
                    this.props.setAuthUserData(id, email, login);
                }
            })
        // if(this.props.id) {
        //     axios.get("https://social-network.samuraijs.com/api/1.0/profile/"+ this.props.id)
        //         .then((response) => {
        //             this.props.setUserProfile(response.data)
        //         })
        // }
    }

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


export default  connect(mapStateToProps, {setAuthUserData, setToggleIsFetchingAuth,
    // setUserProfile
})(HeaderContainer)