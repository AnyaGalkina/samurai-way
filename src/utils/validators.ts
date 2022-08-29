import React from "react";

export const required = (value: any) => {
    if (value) {
        return undefined
    }
    return "Field is required";
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value && value.length <= maxLength) return undefined;
    return ("Max length is " + maxLength + " symbols")
}

export const minLengthCreator = (minLength: number) => (value: string) => {
    if (value && value.length >= minLength) return undefined;
    return ("Min length is " + minLength + " symbols")
}