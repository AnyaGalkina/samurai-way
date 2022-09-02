import React, {ChangeEvent, useState} from "react";

type PropsType = {
    status: string | undefined;
    updateUserStatus: ( status: string ) => any;
}

const ProfileStatus: React.FC<PropsType> = ({status, updateUserStatus}) => {

    const [editMode, setEditMode] = useState(false);
    const [statusText, setStatusText] = useState(status === undefined ? "" : status );

    const handleOnClickStatusChange = () => {
        setEditMode(true);
    }

    const handleOnChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusText(e.currentTarget.value);
    }

    const handleOnBlurSetStatus = () => {
        // debugger
        updateUserStatus(statusText);
        setEditMode(false);
    }

    return (
        <>
            {editMode ?
                <div>
                    <input
                        autoFocus
                        value={statusText}
                        onChange={handleOnChangeStatus}
                        onBlur={handleOnBlurSetStatus}></input>
                </div>
                :
                <div>
                    <span  placeholder={"add status"} onClick={handleOnClickStatusChange}>{status || "------"}</span>
                </div>
            }
        </>
    );
};

export default ProfileStatus;