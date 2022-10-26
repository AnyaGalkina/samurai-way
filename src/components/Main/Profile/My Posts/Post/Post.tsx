import React from "react";
import styles from "./Post.module.css";
import Avatar from "../../../../common/Avatar/Avatar";
import {HeartFilled, HeartTwoTone} from "@ant-design/icons";
import {Button} from "antd";
import {useDispatch} from "react-redux";
import {changeLikesCounter} from "../../../../../redux/profile-reducer";


type PropsType = {
    id: string
    isLikeAdded: boolean;
    likesCounter: number;
    postText: string
}

const Post: React.FC<PropsType> = ({postText, likesCounter, isLikeAdded, id}) => {
    const dispatch = useDispatch();

    const addLikeHandler = () => {
        dispatch(changeLikesCounter(id, !isLikeAdded));
    }

    return (
        <div className={styles.item}>
            <Avatar src={"https://hw-media.herworld.com/public/girl-with-backpack.jpg"}/>
            <div>{postText}</div>
            <div>
                    <span>
                        <Button type={"text"}
                                shape={"circle"}
                                icon={isLikeAdded
                                    ? <HeartFilled  style={{color: "hotpink"}} />
                                    : <HeartTwoTone twoToneColor="#eb2f96"/>}
                                onClick={addLikeHandler}
                        />
                        {likesCounter}
                    </span>
            </div>
        </div>
    );
};

export default Post;
