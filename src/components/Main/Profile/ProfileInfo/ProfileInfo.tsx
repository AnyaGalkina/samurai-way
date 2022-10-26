import React, {ChangeEvent, useState} from "react";
import Preloader from "../../../common/Preloader/Preloader";
import defaultUserAvatar from "../../../../assets/images/defaultUserPhoto.jpg";
import {ProfileType} from "../../../../redux/types";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataForm} from "./ProfileData/ProfileDataForm/ProfileDataForm";
import {CameraFilled} from "@ant-design/icons";
import styles from "./ProfileInfo.module.css";
import {Button} from "antd";
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

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelectedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={styles.profileInfoContainer}>
            <div className={styles.avatarContainer}>
                <img className={styles.img}
                     src={profile.photos.large ? profile.photos.large : defaultUserAvatar}
                     alt={"avatar"}/>
                {isOwner &&
                    <div className={styles.uploadPhoto}>
                        <label htmlFor="file">
                            <CameraFilled style={{color: "grey", fontSize: "32px"}}/>
                        </label>
                        <input hidden={true} id="file" type={"file"} onChange={onMainPhotoSelectedHandler}/>
                    </div>
                }
                <ProfileStatus status={status} updateUserStatus={updateUserStatus}/>
            </div>
            {editMode
                ? <ProfileDataForm profile={profile} setEditMode={setEditMode}/>
                : <ProfileData profile={profile} isOwner={isOwner} setEditMode={setEditMode}/>
            }
        </div>
    );
};

export default ProfileInfo;