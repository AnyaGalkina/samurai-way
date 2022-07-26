export type ProfileContactsType = {
    github: string | null;
    vk: string | null;
    facebook: string | null;
    instagram: string | null;
    twitter: string | null;
    website: string | null;
    youtube: string | null;
    mainLink: string | null;
};

export type PhotosType = {
    small: string | null;
    large: string | null;
};

export type ProfileType = {
    aboutMe?: string |null;
    userId: number | null;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: ProfileContactsType;
    photos: PhotosType;
    userStatus?: string |null;
    updateUserStatus?: boolean;
};


export type UserType = {
    id: number;
    name: string;
    uniqueUrlName: null | string;
    status: string | null;
    followed: boolean;
    photos: PhotosType;
}