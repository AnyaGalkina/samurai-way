import React, {} from 'react';
import Post from "./Post/Post";
import styles from './MyPosts.module.css';
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const onHandleSubmit = (formData: AddMyPostFormDataType) => {
        props.addPost(formData.myPostText);
    }

    return (
        <div className={styles.postsBlock}>
            My Post
            <div>
                <ReduxAddMyPostForm onSubmit={onHandleSubmit} />
            </div>
            <div className={styles.posts}>
                {props.posts.map(post => <Post key={post.id} likesCounter={post.likesCounter}
                                               postText={post.postText}/>)}
            </div>
        </div>
    );
};

export default MyPosts;

export type AddMyPostFormDataType = {
    myPostText: string
}

export const  AddMyPostForm: React.FC<InjectedFormProps<AddMyPostFormDataType>> = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"myPostText"}/>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

export const ReduxAddMyPostForm = reduxForm<AddMyPostFormDataType>({form: "myPost"})(AddMyPostForm)