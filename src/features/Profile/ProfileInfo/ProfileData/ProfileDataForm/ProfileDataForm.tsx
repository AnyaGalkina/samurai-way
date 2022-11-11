import React from "react";
import {ProfileContactsType, ProfileType} from "../../../../../redux/types";
import {useFormik} from "formik";
import {updateProfile} from "../../../profile-reducer";
import {useDispatch} from "react-redux";
import {UpdateProfileType} from "../../../profile-api";
import styles from "./ProfileFDataForm.module.css";
import {Checkbox, Input} from "antd";

type PropsType = {
    profile: ProfileType;
    setEditMode: (editMode: boolean) => void;
}

const inputStyles = {width: "200px", marginBottom: "10px"}
const buttonStyles = {
    color: "#fff",
    backgroundColor: "#1ac2c1",
    borderColor: "#1ac2c1",
}
export const ProfileDataForm = ({profile, setEditMode}: PropsType) => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            aboutMe: profile.aboutMe,
            contacts: profile.contacts
        },
        // validate:,
        onSubmit: (values) => {
            dispatch(updateProfile(values as UpdateProfileType));
            setEditMode(false);
        }
    });


    return (
        <div className={styles.profileDataFormContainer}>
            <form onSubmit={formik.handleSubmit}>
                <h3>Nickname: </h3>
                <Input name={"fullName"}
                       type={"text"}
                       value={formik.values.fullName}
                       onChange={formik.handleChange}
                       style={inputStyles}
                />

                <h3>About Me:</h3>
                <Input name={"aboutMe"}
                       type={"text"}
                       value={formik.values.aboutMe!}
                       onChange={formik.handleChange}
                       style={inputStyles}
                />
                <h3>Looking for a job description:</h3>
                <Input name={"lookingForAJobDescription"}
                       type={"text"}
                       value={formik.values.lookingForAJobDescription}
                       onChange={formik.handleChange}
                       style={inputStyles}
                />

                <div className={styles.lookForAJob}>
                    <h3>Looking for a job:</h3>
                    <Checkbox name={"lookingForAJob"}
                              type={"checkbox"}
                              checked={formik.values.lookingForAJob}
                              onChange={formik.handleChange}
                              style={{marginLeft:"20px"}}
                    />
                </div>

                <h3 style={{textAlign: "center"}}>Contacts:</h3>
                <span>{Object.keys(profile.contacts).map((key, i) => {
                    return (<div key={i} className={styles.contactContainer}>
                        <b>{key}</b>
                        <Input name={"contacts." + key}
                               type={"text"}
                               value={formik.values.contacts[key as keyof ProfileContactsType]!}
                               onChange={formik.handleChange}
                               style={{width: "200px"}}
                        />
                    </div>)
                })}</span>

                <button
                    style={buttonStyles}
                    // type="primary"
                    //@ts-ignore
                    type={"submit"}>Save
                </button>
            </form>
        </div>
    );
};

