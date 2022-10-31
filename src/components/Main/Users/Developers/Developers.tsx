import React from "react";
import {UserType} from "../../../../redux/types";
import Pagination from "../../../common/Pagination/Pagination";
import User from "./User/User";
import {Divider} from "antd";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";

type PropsType = {
    users: Array<UserType>;
    currentPage: number;
    followingInProgress: Array<number>;
    onPageChanged: (pageNumber: number) => void;
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
    const totalItemsCount = useSelector<AppStateType, number>(state => state.usersPage.totalUsersCount);

    return (
        <div>
            <Pagination currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalItemsCount}/>
            {users && users.map((u: UserType) => {
                return(
                    <>
                        <User
                            key={u.id}
                            user={u}
                            followingInProgress={followingInProgress}
                            follow={follow}
                            unfollow={unfollow}
                        />
                        <Divider/>
                    </>
                )
            }
            )}
        </div>
    );
};

export default Developers;