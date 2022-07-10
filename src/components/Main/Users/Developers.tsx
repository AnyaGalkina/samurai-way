import React from "react";
import {DevelopersPropsType} from "./DevelopersContainer";
import Avatar from "../Avatar/Avatar";
import defaultUserAvatar from "../../../assets/images/defaultUserPhoto.jpg";

const Developers: React.FC<DevelopersPropsType> = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [{
                id: 1,
                photoUrl: defaultUserAvatar,
                followed: false,
                fullName: "Frank",
                status: "That's my status",
                location: {city: "Phuket", country: "Thailand"}
            },
            {
                id: 2,
                photoUrl: defaultUserAvatar,
                followed: true,
                fullName: "Joe",
                status: "That's my status",
                location: {city: "Phuket", country: "Thailand"}
            },
            {
                id: 3,
                photoUrl: defaultUserAvatar,
                followed: true,
                fullName: "Oliver",
                status: "That's my status",
                location: {city: "Phuket", country: "Thailand"}
            }]
        )
    }

    return (
        <div>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div>
                            <Avatar src={u.photoUrl}/>
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>
            )}
        </div>
    );
};

export default Developers;