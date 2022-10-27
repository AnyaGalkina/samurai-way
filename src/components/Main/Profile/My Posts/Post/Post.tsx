import React from "react";
import styles from "./Post.module.css";
import Avatar from "../../../../common/Avatar/Avatar";
import {HeartFilled, HeartTwoTone} from "@ant-design/icons";
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {changeLikesCounter} from "../../../../../redux/profile-reducer";
import defaultUserAvatar from "../../../../../assets/images/defaultUserPhoto.jpg";
import {AppStateType} from "../../../../../redux/redux-store";


type PropsType = {
    id: string
    isLikeAdded: boolean;
    likesCounter: number;
    postText: string
}

const Post: React.FC<PropsType> = ({postText, likesCounter, isLikeAdded, id}) => {
    const dispatch = useDispatch();
    const photosLarge = useSelector<AppStateType,string>(state => state.profilePage.profile?.photos.large!);

    const addLikeHandler = () => {
        dispatch(changeLikesCounter(id, !isLikeAdded));
    }

    return (
        <div className={styles.postItem}>
            <div className={styles.postBody}>
                <Avatar src={photosLarge ? photosLarge : defaultUserAvatar}/>
                <div className={styles.postText}><span>{postText}</span></div>
            </div>
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
