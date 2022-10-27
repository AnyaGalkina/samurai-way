import React, {memo} from "react";
import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import {MyPostsPropsType} from "./MyPostsContainer";
import {AddMyPostForm} from "./AddMyPostForm/AddMyPostForm";


const MyPosts: React.FC<MyPostsPropsType> = memo(({posts}) => {

    return (
        <div className={styles.postsBlock}>
            My Post
            <div>
                <AddMyPostForm/>
            </div>
            <div className={styles.posts}>
                {posts.map(post =>
                    <Post
                        key={post.id}
                        id={post.id}
                        isLikeAdded={post.isLikeAdded}
                        likesCounter={post.likesCounter}
                        postText={post.postText}
                    />)}
            </div>
        </div>
    );
});

export default MyPosts;

