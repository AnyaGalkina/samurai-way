import React, {ChangeEvent} from "react";
import Preloader from "../../../common/Preloader/Preloader";
import defaultUserAvatar from "../../../../assets/images/defaultUserPhoto.jpg";
import yesSign from "../../../../assets/images/yesSign.png";
import noSign from "../../../../assets/images/noSign.png";
import Avatar from "../../../common/Avatar/Avatar";
import {ProfileType} from "../../../../redux/types";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
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

                <h3>About Me:</h3>
                <p>{profile.aboutMe}</p>

                <h3>Looking for a job description:</h3>
                <p>{profile.lookingForAJobDescription}</p>

                <h3>Contacts:</h3>
                <h3>Looking for a job: <span> <Avatar src={profile.lookingForAJob ? yesSign : noSign}/> </span>
                </h3>

            </div>
        </div>
    );
};

export default ProfileInfo;