const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_TOGGLE_IS_FETCHING = "SET_TOGGLE_IS_FETCHING";


// type LocationType = {
//     city: string;
//     country: string
// }

type PhotosType = {
    small: string | null;
    large: string | null
}

export type UserType = {
    id: number;
    name: string;
    uniqueUrlName: null | string;
    status: string | null;
    followed: boolean;
    photos: PhotosType;
}

export type InitialStateType = typeof initialState;
type ActionType =
    FollowType
    | SetToggleIsFetchingType
    | UnfollowType
    | SetUsersType
    | SetCurrentPageType
    | SetTotalUsersCountType;
type FollowType = ReturnType<typeof follow>;
type UnfollowType = ReturnType<typeof unfollow>;
type SetUsersType = ReturnType<typeof setUsers>;
type SetCurrentPageType = ReturnType<typeof setCurrentPage>;
type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCount>;
type SetToggleIsFetchingType = ReturnType<typeof setToggleIsFetching>;

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false
}

const userReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)};
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)};
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};
        case SET_TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const follow = (userId: number) => {
    return {type: FOLLOW, userId} as const
};
export const unfollow = (userId: number) => {
    return {type: UNFOLLOW, userId} as const
};
export const setUsers = (users: Array<UserType>) => {
    return {type: SET_USERS, users} as const
};
export const setCurrentPage = (currentPage: number) => {
    return {type: SET_CURRENT_PAGE, currentPage} as const
};
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const
};
export const setToggleIsFetching = (isFetching: boolean) => {
    return {type: SET_TOGGLE_IS_FETCHING, isFetching} as const
};

export default userReducer;