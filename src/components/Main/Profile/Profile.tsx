import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";
import {InitialStateType} from "../../../redux/profile-reducer";

type PropsType = {
    profilePage: InitialStateType;
    status: string;
    updateUserStatus: ( status: string ) => any;
}


const Profile: React.FC<PropsType> = ({ profilePage, status,   updateUserStatus, ...restProps }) => {
    return (
        <div className={styles.descriptionBlock}>
            <ProfileInfo profile={profilePage.profile} status={status} updateUserStatus={updateUserStatus }/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;