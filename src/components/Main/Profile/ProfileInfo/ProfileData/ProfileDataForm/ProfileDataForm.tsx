import React from "react";
import {ProfileContactsType, ProfileType} from "../../../../../../redux/types";
import {useFormik} from "formik";
import {updateProfile} from "../../../../../../redux/profile-reducer";
import {useDispatch} from "react-redux";
import {UpdateProfileType} from "../../../../../../api/profile-api";
import {Button} from "antd";

type PropsType = {
    profile: ProfileType;
    setEditMode: (editMode: boolean) => void;
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
        <form onSubmit={formik.handleSubmit}>
            <h2>Name: </h2>
            <input name={"fullName"}
                   type={"text"}
                   value={formik.values.fullName}
                   onChange={formik.handleChange}
            />

            <h3>About Me:</h3>
            <input name={"aboutMe"}
                   type={"text"}
                   value={formik.values.aboutMe!}
                   onChange={formik.handleChange}
            />

            <h3>Looking for a job description:</h3>
            <input name={"lookingForAJobDescription"}
                   type={"text"}
                   value={formik.values.lookingForAJobDescription}
                   onChange={formik.handleChange}
            />

            <h3>Looking for a job:</h3>
            <input name={"lookingForAJob"}
                   type={"checkbox"}
                   checked={formik.values.lookingForAJob}
                   onChange={formik.handleChange}
            />

            <h3>Contacts:</h3>
            <span>{Object.keys(profile.contacts).map((key, i) => {
                return (<div key={i}>
                    <b>{key}</b>
                    <input name={"contacts." + key}
                           type={"text"}
                           value={formik.values.contacts[key as keyof ProfileContactsType]!}
                           onChange={formik.handleChange}
                    />
                </div>)
            })}</span>

            <Button
                style={{
                    // backgroundColor: "#149AC9"
                    backgroundColor: "#1ac2c1",
                    borderColor: "#1ac2c1",
                }}
                // type="primary"
                //@ts-ignore
                type={"submit"}>Save</Button>
        </form>
    );
};

