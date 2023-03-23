import React, {ChangeEvent, useState} from "react";
import {EditOutlined} from "@ant-design/icons";
import {FaQuoteRight, FaQuoteLeft} from "react-icons/fa";

type PropsType = {
    status: string | undefined;
    updateUserStatus: (status: string) => any;
    isOwner: boolean
}

const ProfileStatus: React.FC<PropsType> = ({status, updateUserStatus, isOwner}) => {

    const [editMode, setEditMode] = useState(false);
    const [statusText, setStatusText] = useState(status === undefined ? "" : status);

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
            {editMode ?
                <div>
                    <input
                        autoFocus
                        value={statusText}
                        onChange={handleOnChangeStatus}
                        onBlur={handleOnBlurSetStatus}></input>
                </div>
                :
                // @ts-ignore
                <div style={{ wordWrap:' break-word', width: '340px'}}>
                    <FaQuoteLeft style={{color: "#001628", margin: "10px"}}/>
                    <b><span style={{color: "#001628", fontSize: "20px", cursor: "pointer"}} placeholder={"add status"}
                             onClick={handleOnClickStatusChange}>{status || <EditOutlined/>}</span></b>
                    <FaQuoteRight style={{color: "#001628", margin: "10px"}}/>
                </div>
            }
        </>
    );
};

export default ProfileStatus;