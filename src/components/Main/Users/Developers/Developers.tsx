import React from "react";
import {UserType} from "../../../../redux/types";
import Pagination from "../../../common/Pagination/Pagination";
import User from "./User/User";

type PropsType = {
    users: Array<UserType>;
    currentPage: number;
    followingInProgress: Array<number>;
    onPageChanged: (totalUsersCount: number) => void;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
}

const Developers: React.FC<PropsType> = ({
                                             currentPage,
                                             followingInProgress,
                                             unfollow,
                                             follow,
                                             onPageChanged,
                                             users,
                                         }) => {
    return (
        <div>
            <Pagination currentPage={currentPage} onPageChanged={onPageChanged}/>

            {users && users.map((u: UserType) =>
                <User
                    key={u.id}
                    user={u}
                    followingInProgress={followingInProgress}
                    follow={follow}
                    unfollow={unfollow}
                />
            )}
        </div>
    );
};

export default Developers;