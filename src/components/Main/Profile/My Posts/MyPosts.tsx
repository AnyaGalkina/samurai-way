import React, {memo} from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import {MyPostsPropsType} from "./MyPostsContainer";
import {AddMyPostForm} from "./AddMyPostForm/AddMyPostForm";


const MyPosts: React.FC<MyPostsPropsType> = memo((props) => {

    return (
        <div className={styles.postsBlock}>
            My Post
            <div>
                <AddMyPostForm/>
            </div>
            <div className={styles.posts}>
                {props.posts.map(post =>
                    <Post
                        key={post.id}
                        likesCounter={post.likesCounter}
                        postText={post.postText}
                    />)}
            </div>
        </div>
    );
});

export default MyPosts;

