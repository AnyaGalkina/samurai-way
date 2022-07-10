import defaultUserAvatar from "../assets/images/defaultUserPhoto.jpg";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

type LocationType = {
    city: string;
    country: string
}

export type UserType = {
    id: number;
    photoUrl: string;
    followed: boolean;
    fullName: string;
    status: string;
    location: LocationType
}

export type InitialStateType = typeof initialState;
type ActionType = FollowType | UnfollowType | SetUsersType;
type FollowType = ReturnType<typeof followAC>;
type UnfollowType = ReturnType<typeof unfollowAC>;
type SetUsersType = ReturnType<typeof setUsersAC>;

let initialState = {
    users: [
    ] as Array<UserType>
}

const userReducer = (state:InitialStateType = initialState, action: ActionType ): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed:true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed:false} : u)}
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: number) => {return {type:  FOLLOW, userId} as const};
export const unfollowAC = (userId: number) => {return {type:  UNFOLLOW, userId} as const};
export const setUsersAC = (users: Array<UserType>) => {return{type:SET_USERS, users} as const};

export default userReducer;