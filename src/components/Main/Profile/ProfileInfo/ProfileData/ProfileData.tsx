import React from "react";
import Avatar from "../../../../common/Avatar/Avatar";
import yesSign from "../../../../../assets/images/yesSign.png";
import noSign from "../../../../../assets/images/noSign.png";
import {ProfileContactsType, ProfileType} from "../../../../../redux/types";
import {Contact} from "./Contact/Contact";
import {Button, Divider} from "antd";
import styles from "./ProfileData.module.css";

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
            <div className={styles.profileDataContainer}>
                <h2 className={styles.name}>{profile.fullName}</h2>
                <Divider/>

                <h3>About Me:</h3>
                <p>{profile.aboutMe}</p>

            </div>

            <div className={styles.profileLookForDataContainer}>

                <h3>Looking for a job description:</h3>
                <p>{profile.lookingForAJobDescription}</p>

                <h3>Looking for a job:
                    <Avatar avaStyles={styles.lookForAJobImg} src={profile.lookingForAJob ? yesSign : noSign}/>
                </h3>
            </div>

            <div className={styles.profileContactsContainer}>

                <h3>Contacts:</h3>
                <span>{Object.keys(profile.contacts).map((c, i) =>
                    profile.contacts[c as keyof ProfileContactsType]
                        ?
                        <Contact key={i} contactTitle={c}
                                 contactValue={profile.contacts[c as keyof ProfileContactsType]}/>
                        : ""
                )}</span>

                {isOwner &&
                    <Button
                        style={{
                            // backgroundColor: "#149AC9"
                            // backgroundColor: "#ffb549",
                            // borderColor: "#ffb549",
                            backgroundColor: "#fff",
                            color: "black",
                            borderColor: "#fff",
                            margin: "20px 0"
                        }}
                        type="primary"
                        onClick={onEditClickHandler}>Edit profile
                    </Button>}
            </div>
        </div>
    );
};