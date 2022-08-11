import React from "react";
import Avatar from "../../../common/Avatar/Avatar";
import defaultUserAvatar from "../../../../assets/images/defaultUserPhoto.jpg";
import styles from "./Developers.module.css";
import {NavLink} from "react-router-dom";
import {UserType} from "../../../../redux/types";
import axios from "axios";
import {usersAPI} from "../../../../api/api";

type PropsType = {
    users: Array<UserType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    onPageChanged: (totalUsersCount: number) => void;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
}

const Developers: React.FC<PropsType> = (props) => {
    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesCount = 10;
    let pages: Array<number> = [];

    for (let i = 1; i < pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span
                            key={p}
                            className={`${props.currentPage === p && styles.selectedPage}`}
                            onClick={() => {
                                props.onPageChanged(p)
                            }}
                        >{p}</span>)
                })}
            </div>
            {props.users && props.users.map((u: UserType) =>
                <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile" + u.id}>
                                <Avatar src={u.photos.small ? u.photos.small : defaultUserAvatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    usersAPI.unfollow(u.id)
                                        .then(response => {
                                            if (response.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        })

                                }}>unfollow</button>
                                :
                                <button onClick={() => {
                                    usersAPI.follow(u.id)
                                        .then((response) => {
                                            if (response.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })
                                }}>follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </span>
                </div>
            )}
        </div>
    );
};

export default Developers;