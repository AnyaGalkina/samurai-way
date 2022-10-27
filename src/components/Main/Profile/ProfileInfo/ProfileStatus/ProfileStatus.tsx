import React, {ChangeEvent, useState} from "react";
import {EditOutlined} from "@ant-design/icons";


type PropsType = {
    status: string | undefined;
    updateUserStatus: ( status: string ) => any;
    isOwner:boolean
}

const ProfileStatus: React.FC<PropsType> = ({status, updateUserStatus, isOwner}) => {

    const [editMode, setEditMode] = useState(false);
    const [statusText, setStatusText] = useState(status === undefined ? "" : status );

    const handleOnClickStatusChange = () => {
        isOwner && setEditMode(true);
    }

    const handleOnChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusText(e.currentTarget.value);
    }

    const handleOnBlurSetStatus = () => {
        updateUserStatus(statusText);
        setEditMode(false);
    }

    return (
        <>
            { editMode ?
                <div style={{color: "#001628"}}>
                    <input
                        autoFocus
                        value={statusText}
                        onChange={handleOnChangeStatus}
                        onBlur={handleOnBlurSetStatus}></input>
                </div>
                :
                <div>
                    <b style={{color: "#001628", fontSize:"24px"}}>STATUS: </b>
                    <span style={{color: "#001628", fontSize:"24px"}}  placeholder={"add status"} onClick={handleOnClickStatusChange}>{status || <EditOutlined />}</span>
                </div>
            }
        </>
    );
};

export default ProfileStatus;