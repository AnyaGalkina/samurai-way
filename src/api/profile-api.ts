import {AxiosResponse} from "axios";
import {PhotosType, ProfileContactsType, ProfileType} from "../redux/types";
import {instance} from "./auth-api";

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ResGetProfileType>(`/profile/${userId}`)
            .then(response => {
                return response.data
            })
    },

    getStatus(userId: number) {
        return instance.get<{ userId: number }, CommonResType<string>>(`/profile/status/${userId}`)
            .then(response => {
                return response.data
            })
    },

    updateStatus(status: string) {
        return instance.put<UpdateProfileType, AxiosResponse<CommonResType<{}>>>("/profile/status", {status})
            .then(response => {
                return response.data
            })
    },

    updatePhoto(photoFile: File) {
        let formData = new FormData();
        formData.append("image", photoFile)

        return instance.put<File, AxiosResponse<CommonResType<{ photos: PhotosType }>>>("/profile/photo", formData, {headers: {"Content-Type": "multipart/form-data"}})
            .then(response => {
                return response.data
            })
    },

    updateProfile(profile: UpdateProfileType) {
        return instance.put<UpdateProfileType, AxiosResponse<CommonResType<ProfileType>>>("/profile", profile)
            .then(response => {
                return response.data
            })
    }
}

export type UpdateProfileType = {
    aboutMe: string;
    contacts: ProfileContactsType;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
}


export type CommonResType<T = {}> = {
    resultCode: number;
    messages: string[];
    fieldsErrors: string[];
    data: T;
}

export type ResGetProfileType = {
    aboutMe: string;
    contacts: ProfileContactsType;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: PhotosType;
}