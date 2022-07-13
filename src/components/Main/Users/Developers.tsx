import React from "react";
import {DevelopersPropsType} from "./DevelopersContainer";
import Avatar from "../Avatar/Avatar";
import defaultUserAvatar from "../../../assets/images/defaultUserPhoto.jpg";
import axios from "axios";

const Developers: React.FC<DevelopersPropsType> = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")

                .then(response => {
                    debugger
                    props.setUsers(response.data.items)
                })
        }
    }

    return (
        <div>
            <button onClick={() => getUsers()}>Get users</button>

            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <Avatar src={u.photos.small ? u.photos.small : defaultUserAvatar}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>unfollow</button>
                                :
                                <button onClick={() => {
                                    props.follow(u.id)
                                }}>follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        {/*<span>*/}
                        {/*    <div>{u.location.city}</div>*/}
                        {/*    <div>{u.location.country}</div>*/}
                        {/*</span>*/}
                    </span>
                </div>
            )}
        </div>
    );
};

export default Developers;