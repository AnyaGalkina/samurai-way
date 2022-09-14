import React from 'react';
import styles from "./Post.module.css";
import Avatar from "../../../../common/Avatar/Avatar";

type PropsType = {
    likesCounter: number;
    postText: string
}

const Post: React.FC<PropsType> = ({postText, likesCounter}) => {
    return (
            <div className={styles.item}>
                <Avatar src={"https://hw-media.herworld.com/public/girl-with-backpack.jpg"} />
                <div>{postText}</div>
                <div><span>♥ {likesCounter}</span></div>
                <div>
                    <button>♥</button>
                </div>
            </div>
    );
};

export default Post;