import React from "react";
// import {DevelopersPropsType} from "./DevelopersContainer";
import Avatar from "../Avatar/Avatar";
import defaultUserAvatar from "../../../assets/images/defaultUserPhoto.jpg";
import axios from "axios";
import {UserType} from "../../../redux/users-reducer";
import {MapDispatchToPropsType, MapStateToPropsType} from "./DevelopersContainer";


class Users extends React.Component<MapStateToPropsType, MapDispatchToPropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")

            .then(response => {
                debugger
                this.state.setUsers(response.data.items)
            })

    }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //
    //             .then(response => {
    //                 debugger
    //                 this.props.setUsers(response.data.items)
    //             })
    //     }
    // }


    render() {
         return (
             <div>
                 {/*<button onClick={() => this.getUsers()}>Get users</button>*/}

                 {this.props.users.map((u: UserType) =>
                     <div key={u.id}>
                    <span>
                        <div>
                            <Avatar src={u.photos.small ? u.photos.small : defaultUserAvatar}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    this.state.unfollow(u.id)
                                }}>unfollow</button>
                                :
                                <button onClick={() => {
                                    this.state.follow(u.id)
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
     }
}

export default Users;