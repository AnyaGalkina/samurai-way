import React from "react";
import styles from "./FormsControl.module.css";

export const FormControl = ({meta, children}: any) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={hasError ? `${styles.error}` : ""}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
export const Textarea = (props: any) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props: any) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps}/></FormControl>
}
