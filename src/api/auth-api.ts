import axios, {AxiosResponse} from "axios";
import {CommonResType} from "./profile-api";
import {UserIdReqType} from "./user-api";

export const instance = axios.create({
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0",
        headers: {"API-KEY": "8cb31c3e-5e62-4d4f-945f-025b0014bebf"}
    }
)

export const authAPI = {
    getMe() {
        return instance.get<CommonResType<ResGetMeType>>("/auth/me").then(response => {
            return response.data
        })
    },
    login(email: string, password: string, rememberMe?: boolean, captcha?: string) {
        return instance.post<LoginPostReqType, AxiosResponse<CommonResType<UserIdReqType>>>("/auth/login",
            {email, password, rememberMe, captcha})
            .then(response => {
                return response.data
            })
    },
    logout() {
        return instance.delete<CommonResType>("/auth/login").then(response => {
            return response.data
        })
    },
};


type ResGetMeType = {
    id: 2,
    email: "blabla@bla.bla",
    login: "samurai"
}

type LoginPostReqType = {
    email: string;
    password: string;
    rememberMe?: boolean;
    captcha?: string;
}
