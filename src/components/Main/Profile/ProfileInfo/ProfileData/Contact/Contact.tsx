import React from "react";

export type PropsType = {
    contactTitle: string;
    contactValue: string;
}


export const Contact = ({contactTitle, contactValue}:PropsType) => {
    return (
        <div>
            <b>{contactTitle}: </b><span>{contactValue}</span>
        </div>
    );
};