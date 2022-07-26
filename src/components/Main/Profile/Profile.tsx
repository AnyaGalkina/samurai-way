import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";
import {InitialStateType} from "../../../redux/profile-reducer";

type PropsType = {
    profilePage: InitialStateType,
}


const Profile: React.FC<PropsType> = (props) => {
    return (
        <div className={styles.descriptionBlock}>
            <ProfileInfo profile={props.profilePage.profile}/>
            <MyPostsContainer
            />
        </div>
    );
};

export default Profile;