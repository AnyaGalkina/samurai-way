import React, {ChangeEvent} from "react";
import Preloader from "../../../common/Preloader/Preloader";
import defaultUserAvatar from "../../../../assets/images/defaultUserPhoto.jpg";
import {ProfileType} from "../../../../redux/types";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {ProfileData} from "./ProfileData/ProfileData";
// import {useDispatch} from "react-redux";
// import {savePhoto} from "../../../../redux/profile-reducer";


type PropsType = {
    profile: ProfileType | null;
    status: string | undefined;
    updateUserStatus: (status: string) => any;
    isOwner: boolean;
    savePhoto: (photoFile: File) => void;

}

const ProfileInfo: React.FC<PropsType> = ({savePhoto, isOwner, profile, status, updateUserStatus}) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelectedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div>
                <img src={profile.photos.large ? profile.photos.large : defaultUserAvatar} alt={"avatar"}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelectedHandler}/>}

                <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>

                <ProfileData profile={profile}/>
            </div>
        </div>
    );
};

export default ProfileInfo;