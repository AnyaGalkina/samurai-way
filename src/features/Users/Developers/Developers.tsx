import React, {useEffect} from 'react';
import {UserType} from "../../../redux/types";
import Pagination from "../../../common/components/Pagination/Pagination";
import User from "./User/User";
import {Divider} from "antd";
import {useSelector} from 'react-redux';
import {AppStateType} from "../../../app/redux-store";
import {Search} from '../Search/Search';
import {FiltersType} from '../users-reducer';
import {useHistory} from 'react-router-dom';
import {ROUTES} from '../../../common/enums/routes';

type QueryParamsType = {
    term?: string,
    friend?: boolean,
    currentPage?: number
}
type PropsType = {
    users: Array<UserType>;
    currentPage: number;
    followingInProgress: Array<number>;
    filters: FiltersType;
    onPageChanged: (pageNumber: number) => void;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    onFiltersChanged: (filters: FiltersType) => void;
}

const Developers: React.FC<PropsType> = ({
                                             currentPage,
                                             followingInProgress,
                                             unfollow,
                                             onFiltersChanged,
                                             follow,
                                             onPageChanged,
                                             users,
                                             filters
                                         }) => {
    const totalItemsCount = useSelector<AppStateType, number>(state => state.usersPage.totalUsersCount);
    const history = useHistory();

    useEffect(() => {
        const query: QueryParamsType = {}

        if(filters.term){
            query.term = filters.term
        }
        if(filters.friend !== null){
            query.friend = filters.friend
        }
        if(currentPage !== 1) {
            query.currentPage = currentPage
        }

        const arrQuery = ["?"];

        for (let key in query) {
            if (query.hasOwnProperty(key)) {
                // @ts-ignore
                arrQuery.push(key + "=" + query[key] + "&")
            }
        }

        history.push({
            pathname: ROUTES.USERS,
            search: arrQuery.join("").slice(0,-1)
        })
        console.log(arrQuery.join(""))
    }, [filters, currentPage]);


    return (
        <div>
            <Pagination currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalItemsCount}/>
            <Search  onFiltersChanged={onFiltersChanged}/>
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