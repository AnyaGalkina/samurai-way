import React from 'react';
import styles from "./Post.module.css";
import Avatar from "../../../Avatar/Avatar";

type PropsType = {
    likesCounter: number;
    postText: string
}

const Post: React.FC<PropsType> = (props) => {
    return (
            <div className={styles.item}>
                <Avatar src={"https://hw-media.herworld.com/public/girl-with-backpack.jpg"} />
                <div>{props.postText}</div>
                <div><span>♥ {props.likesCounter}</span></div>
                <div>
                    <button>♥</button>
                </div>
            </div>
    );
};

export default Post;