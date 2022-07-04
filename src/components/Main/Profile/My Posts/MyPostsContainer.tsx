import React, {ChangeEvent, KeyboardEvent} from 'react';
import Post from "./Post/Post";
import styles from './MyPosts.module.css';
import {ActionType, AppState} from "../../../../redux/redux-store";
import {addPostAC, PostType, ProfilePageType, updateNewPostTextAC} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


type PropsType = {
    profilePage: ProfilePageType;
    dispatch:(action: ActionType) => void
    // addPost:() => void;
    // updateNewPostText: (newPostText: string) => void;
}

const MyPostsContainer: React.FC<PropsType> = (props) => {

    const addPost = () => {
        props.dispatch(addPostAC());
    }


    const updateNewPostText = (newPostText: string)  => {
        props.dispatch(updateNewPostTextAC(newPostText));
    }


    return (
        <MyPosts
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />
    );
};

export default MyPostsContainer;