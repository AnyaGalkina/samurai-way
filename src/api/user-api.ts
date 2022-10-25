import {instance} from "./auth-api";
import {AxiosResponse} from "axios";
import {CommonResType} from "./profile-api";
import {UserType} from "../redux/types";

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<GetUsersReqType, AxiosResponse<ResGetUsersType>>(`/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                    return response.data
                }
            )
    },
    follow(userId: number) {
        return instance.post<UserIdReqType, AxiosResponse<CommonResType>>(`/follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(userId: number) {
        return instance.delete<UserIdReqType, AxiosResponse<CommonResType>>(`/follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}

type GetUsersReqType = {
    currentPage?: number;
    pageSize?: number;
    friend?: boolean;
    term?: string
}

export type UserIdReqType = { userId: number }

export type ResGetUsersType = {
	items: UserType[];
	totalCount: number;
	error?: any;
}

// export type UsersItemsType = {
// 	name: string;
// 	id: number;
// 	photos: PhotosType;
// 	status?: string;
// 	followed: boolean;
// }