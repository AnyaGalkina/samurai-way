import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../../redux/state";

export type ProfilePropsType = {
    profilePage: ProfilePageType;
    addPost: () => void;
    updateNewPostText: (newPostText: string) => void;
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={styles.descriptionBlock}>
            <ProfileInfo/>
            <MyPosts
                posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

export default Profile;