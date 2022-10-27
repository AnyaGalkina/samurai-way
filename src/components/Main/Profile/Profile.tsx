import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";
import {InitialStateType} from "../../../redux/profile-reducer";

type PropsType = {
    profilePage: InitialStateType;
    status: string;
    isOwner: boolean;
    updateUserStatus: ( status: string ) => void;
    savePhoto: (photoFile: File) => void;
}


export const Profile: React.FC<PropsType> = ({savePhoto, isOwner, profilePage, status,   updateUserStatus, ...restProps }) => {
    return (
        <div className={styles.descriptionBlock}>
            <ProfileInfo savePhoto={savePhoto} isOwner={isOwner} profile={profilePage.profile} status={status} updateUserStatus={updateUserStatus }/>
            {isOwner && <MyPostsContainer/>}
        </div>
    );
};
