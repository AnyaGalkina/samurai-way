import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import styles from './MyPosts.module.css';
import {PostType} from "../../../../redux/profile-reducer";


type PropsType = {
    posts: Array<PostType>;
    newPostText: string;
    addPost:() => void;
    updateNewPostText: (newPostText: string) => void;
}

const MyPosts: React.FC<PropsType> = (props) => {

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