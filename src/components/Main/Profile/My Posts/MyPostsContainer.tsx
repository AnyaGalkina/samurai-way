import React from "react";
import {AppStateType} from "../../../../redux/redux-store";
import {addPost, PostType, updateNewPostText} from "../../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    posts: Array<PostType>;
    newPostText: string
}

type MapDispatchToPropsType = {
    updateNewPostText: (newPostText: string) => void;
    addPost: () => void;
}

export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPost());
        },
        updateNewPostText: (newPostText: string) => {
            dispatch(updateNewPostText(newPostText));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;