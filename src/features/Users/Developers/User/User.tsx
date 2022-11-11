import React from "react";
import {NavLink} from "react-router-dom";
import Avatar from "../../../../common/components/Avatar/Avatar";
import defaultUserAvatar from "../../../../assets/images/defaultUserPhoto.jpg";
import {UserType} from "../../../../redux/types";
import {Button} from "antd";
import styles from "./Users.module.css";

type PropsType = {
    user: UserType;
    followingInProgress: Array<number>;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
}


const User: React.FC<PropsType> = ({user, unfollow, follow, followingInProgress}) => {
    return (
        <div className={styles.userContainer}>
            <div className={styles.userInfoBlock}>
                <NavLink to={"/profile/" + user.id}>
                    <Avatar src={user.photos.small ? user.photos.small : defaultUserAvatar}/>
                </NavLink>
                <div className={styles.userData}>
                    <span>{user.name}</span>
                    <p>{user.status}</p>
                </div>
            </div>
            <div>
                {user.followed
                    ? <Button
                        style={{
                            backgroundColor: "#ffb549",
                            borderColor: "#ffb549",
                        }}
                        type="primary"
                        disabled={followingInProgress.some(id => user.id === id)}
                        onClick={() => {
                            unfollow(user.id)
                        }}>unfollow
                    </Button>
                    :
                    <Button
                        style={{
                            backgroundColor: "#1ac2c1",
                            borderColor: "#1ac2c1",
                        }}
                        type="primary"
                        disabled={followingInProgress.some(id => user.id === id)}
                        onClick={() => {
                            follow(user.id)
                        }
                        }>follow
                    </Button>
                }
            </div>
        </div>
    );
};

export default User;