import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import defaultUserAvatar from "../../../../assets/images/defaultUserPhoto.jpg";
import yesSign from "../../../../assets/images/yesSign.png";
import noSign from "../../../../assets/images/noSign.png";
import Avatar from "../../../common/Avatar/Avatar";
import {ProfileType} from "../../../../redux/types";
import ProfileStatus from "./ProfileStatus/ProfileStatus";


type PropsType = {
    profile: ProfileType | null;
    status: string | undefined;
    updateUserStatus: ( status: string ) => any;
}

const ProfileInfo: React.FC<PropsType> = ({profile, status, updateUserStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://img5.goodfon.ru/wallpaper/nbig/d/81/ostrov-bali-indoneziia-risovye-polia-vulkan-agung.jpg"*/}
            {/*        alt="mainPhoto"></img>*/}
            {/*</div>*/}
            <div>
                <img src={profile.photos.large ? profile.photos.large : defaultUserAvatar} alt={"avatar"}/>
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