import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import styles from './MyPosts.module.css';
import {MyPostsPropsType} from "./MyPostsContainer";


const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    const onButtonClickHandler = () => {
            props.addPost();
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement> ) => {
        props.updateNewPostText(event.currentTarget.value);
    }

    return (
        <div className={styles.postsBlock}>
            My Post
            <div>
                <div>
                    <textarea
                        value={props.newPostText}
                        onChange={onChangeHandler}>
                    </textarea>
                </div>
                <button onClick={onButtonClickHandler}>Add Post</button>
            </div>
            <div className={styles.posts}>
                {props.posts.map(post => <Post key={post.id} likesCounter={post.likesCounter}
                                               postText={post.postText}/>)}
            </div>
        </div>
    );
};

export default MyPosts;