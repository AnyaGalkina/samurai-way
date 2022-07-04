import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../../../redux/redux-store";
import {ProfilePageType} from "../../../redux/profile-reducer";
import MyPostsContainer from "./My Posts/MyPostsContainer";


export type ProfilePropsType = {
    profilePage: ProfilePageType;
    dispatch:(action: ActionType) => void

    // addPost: () => void;
    // updateNewPostText: (newPostText: string) => void;
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={styles.descriptionBlock}>
            <ProfileInfo/>
            <MyPostsContainer
                profilePage={props.profilePage}
                dispatch={props.dispatch}
                // addPost={props.addPost}
                // updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
};

export default Profile;