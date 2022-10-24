import React from "react";
import Avatar from "../../../../common/Avatar/Avatar";
import yesSign from "../../../../../assets/images/yesSign.png";
import noSign from "../../../../../assets/images/noSign.png";
import {ProfileType} from "../../../../../redux/types";
import {Contact} from "./Contact/Contact";

type PropsType = {
    profile: ProfileType;
}

export const ProfileData = ({profile}: PropsType) => {
    return (
        <div>
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
            <span>{Object.keys(profile.contacts).map((c , i)=> {
                <Contact key={i}
                         contactTitle={c}
                         contactValue={""}
                    // contactValue={profile.contacts[c]}
                />
            })}</span>

        </div>
    );
};