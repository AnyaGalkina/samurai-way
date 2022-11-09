import {AppStateType} from "./redux-store";
import {UserType} from "./types";
import {FiltersType} from './users-reducer';

export const getUsersSelector = (state: AppStateType): UserType[] => {
    return state.usersPage.users
}
export const getPageSize = (state: AppStateType): number => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: AppStateType): number => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: AppStateType): number => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStateType): boolean => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType): Array<number> => {
    return state.usersPage.followingInProgress
}
export const getFilters = (state: AppStateType): FiltersType => {
    return state.usersPage.filters
}
