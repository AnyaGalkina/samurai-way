import React, {ChangeEvent, useState} from "react";

type PropsType = {
    status?: string | undefined;

}

const ProfileStatus: React.FC<PropsType> = ({status}) => {
    const [editMode, setEditMode] = useState(false);
    const [statusText, setStatusText] = useState("");

    const changeEditMode = () => {
        setEditMode(!editMode)
    }

    const handleOnClickStatusChange = () => {
        changeEditMode();
    }

    const handleOnChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusText(e.currentTarget.value);
    }

    const handleOnBlurSetStatus = () => {
        // dispatch
        changeEditMode();
    }

    return (
        <>
            {editMode ?
                <div>
                    <input
                        autoFocus
                        onChange={handleOnChangeStatus}
                        onBlur={handleOnBlurSetStatus}></input>
                </div>
                :
                <div>
                    <span onDoubleClick={handleOnClickStatusChange}>{status}</span>
                </div>
            }
        </>
    );
};

export default ProfileStatus;