import React from "react";
import {FormikErrors, useFormik} from "formik";
import {Checkbox, Input} from "antd";
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import styles from "./LoginForm.module.css";
import {login} from "../auth-reducer";

const maxLength = 50;
const minLength = 6;

const inputStyle = {
    marginBottom: "10px",
    width: "220px"
}

type FormikErrorType = {
    loginValue: string,
    password: string;
    rememberMe?: boolean;
    captchaUrl: null | string
}

export const LoginForm = ({captchaUrl}: any) => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            loginValue: "",
            password: "",
            rememberMe: false,
            captchaUrl: null as null | string
        },
        validate: (values) => {
            const errors: FormikErrors<FormikErrorType> = {}

            if (values.loginValue === "") {
                debugger
                errors.loginValue = "Field is required";
            } else if (values.loginValue && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.loginValue)) {
                errors.loginValue = "Invalid email address";
            } else if (values.loginValue && values.loginValue.length > maxLength) {
                errors.loginValue = `Password should be minimum ${maxLength} symbols`
            }

            if (values.password === "") {
                errors.password = "Field is required";
            } else if (values.password && values.password.length < minLength) {
                errors.password = `Password should be minimum ${minLength} symbols`;
            }

            return errors
        },
        onSubmit: values => {
            const {loginValue, password, rememberMe, captchaUrl} = values;
            dispatch(login(loginValue, password, rememberMe, captchaUrl));
            formik.resetForm();
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <Input placeholder={"Login"}
                       onChange={formik.handleChange}
                       value={formik.values.loginValue}
                       name={"loginValue"}
                       style={inputStyle}
                />
                {formik.touched.loginValue && formik.errors.loginValue &&
                    <div className={styles.formSummaryError}>ERROR: {formik.errors.loginValue}</div>
                }
            </div>
            <div>
                <Input.Password placeholder={"Password"}
                                name={"password"}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                style={inputStyle}
                                iconRender={(visible: boolean) => (visible ? <EyeOutlined/> : <EyeInvisibleOutlined/>)}
                />
                {formik.touched.password && formik.errors.password &&
                    <div className={styles.formSummaryError}>ERROR: {formik.errors.password}</div>
                }
            </div>
            <Checkbox type={"checkbox"} name={"rememberMe"}
                      checked={formik.values.rememberMe}
                      onChange={formik.handleChange}
            />
            <div>
                {captchaUrl && <img src={captchaUrl} alt={"captcha"}/>}
                {captchaUrl && <div>
                    <p>Type the characters you see in the picture above:</p>
                    <Input placeholder={"captcha"}
                        //@ts-ignore
                           value={formik.values.captchaUrl}
                           onChange={formik.handleChange}
                           name={"captchaUrl"}
                           style={inputStyle}
                    />
                </div>}
                {formik.touched.captchaUrl && formik.errors.captchaUrl &&
                    <div className={styles.formSummaryError}>ERROR: {formik.errors.captchaUrl}</div>
                }
            </div>
            <div>
                <button style={{backgroundColor: "#1ac2c1", borderColor: "#1ac2c1", color: "white"}}
                        type={"submit"}> Submit
                </button>
            </div>
        </form>
    )
}