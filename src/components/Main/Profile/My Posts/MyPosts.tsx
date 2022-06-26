import React, {ChangeEvent, KeyboardEvent} from 'react';
import Post from "./Post/Post";
import styles from './MyPosts.module.css';
import {ActionType, PostType} from "../../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../../redux/profile-reducer";


type PropsType = {
    posts: Array<PostType>;
    newPostText: string;
    dispatch:(action: ActionType) => void
    // addPost:() => void;
    // updateNewPostText: (newPostText: string) => void;
}

const MyPosts: React.FC<PropsType> = (props) => {

    const onButtonClickHandler = () => {
        // if(newPostElement.current){
            props.dispatch(addPostAC());
            // props.addPost();
            // props.updateNewPostText('');
            // newPostElement.current.value='';
        // }
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement> ) => {
        props.dispatch(updateNewPostTextAC(event.currentTarget.value));
        // props.updateNewPostText(event.currentTarget.value);
    }


    return (
        <div className={styles.postsBlock}>
            My Post
            <div>
                <div>
                    <textarea
                        // ref={newPostElement}
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