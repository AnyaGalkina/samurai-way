import React from "react";
import {NavLink} from "react-router-dom";
import Avatar from "../../../../common/Avatar/Avatar";
import defaultUserAvatar from "../../../../../assets/images/defaultUserPhoto.jpg";
import {UserType} from "../../../../../redux/types";

type PropsType = {
    user: UserType;
    followingInProgress: Array<number>;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
}


const User: React.FC<PropsType> = ({user, unfollow, follow, followingInProgress}) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                        <Avatar src={user.photos.small ? user.photos.small : defaultUserAvatar}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button
                            disabled={followingInProgress.some(id => user.id === id)}
                            onClick={() => {
                                unfollow(user.id)
                            }}>unfollow</button>
                        :
                        <button
                            disabled={followingInProgress.some(id => user.id === id)}
                            onClick={() => {
                                follow(user.id)
                            }
                            }>follow</button>
                    }
                        </div>
                    </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
            </span>
        </div>
    );
};

export default User;