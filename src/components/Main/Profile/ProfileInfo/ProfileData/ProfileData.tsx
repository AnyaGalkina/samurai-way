import React from "react";
import Avatar from "../../../../common/Avatar/Avatar";
import yesSign from "../../../../../assets/images/yesSign.png";
import noSign from "../../../../../assets/images/noSign.png";
import {ProfileContactsType, ProfileType} from "../../../../../redux/types";
import {Contact} from "./Contact/Contact";

type PropsType = {
    profile: ProfileType;
    isOwner: boolean;
    setEditMode: (editMode: boolean) => void
}

export const ProfileData = ({profile, isOwner, setEditMode}: PropsType) => {


    const onEditClickHandler = () => {
        setEditMode(true)
    }

    return (
        <div>
            {isOwner && <button onClick={onEditClickHandler}>edit profile</button>}
            <h2>{profile.fullName}</h2>

            <h3>About Me:</h3>
            <p>{profile.aboutMe}</p>

            <h3>Looking for a job description:</h3>
            <p>{profile.lookingForAJobDescription}</p>

            <h3>Looking for a job:
                <span>
                    <Avatar src={profile.lookingForAJob ? yesSign : noSign}/>
                </span>
            </h3>

            <h3>Contacts:</h3>
            <span>{Object.keys(profile.contacts).map((c, i) => {
                return <Contact key={i}
                                contactTitle={c}
                                contactValue={profile.contacts[c as keyof ProfileContactsType]}
                />
            })}</span>

        </div>
    );
};