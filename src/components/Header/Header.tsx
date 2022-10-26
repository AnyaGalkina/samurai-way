import React from "react";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {LoginOutlined, LogoutOutlined} from "@ant-design/icons";
import {Button} from "antd";

type PropsType = {
    isAuth: boolean,
    login: string | null,
    logout: () => void;
}

const Header: React.FC<PropsType> = ({logout, login, isAuth}) => {

    const onLogoutClikckHandler = () => {
        logout()
    }

    return (
        <header className={styles.header}>
            <div className={styles.loginBlock}>
                {isAuth
                    ? <>
                        <span style={{paddingRight: "17px"}}>{login}</span>
                        <Button
                            style={{
                                // backgroundColor: "#149AC9"
                                backgroundColor: "#1ac2c1",
                                borderColor: "#1ac2c1",
                        }}
                                type="primary" onClick={onLogoutClikckHandler}>
                            <LogoutOutlined style={{paddingRight: "7px"}}/>
                            Logout
                        </Button>
                    </>
                    : <NavLink to={"/login"}>
                        <LoginOutlined style={{paddingRight: "7px"}}/>
                        Login
                    </NavLink>
                }
            </div>
        </header>

    )
}

export default Header;


