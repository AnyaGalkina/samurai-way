import React from "react";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";
import Avatar from "../common/Avatar/Avatar";
import defaultUserPhoto from "../../assets/images/defaultUserPhoto.jpg";

type PropsType = {
    isAuth: boolean,
    login: string | null,
    logout: () => void;
    // userPhotoSmall?: string | null

}

const Header: React.FC<PropsType> = (props) => {
    const onLogoutClikckHandler = () => {
        props.logout()
    }

    return (
        <header className={styles.header}>
            <img src={""} alt={"logo"}/>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <>
                        <span>{props.login}</span> - <button onClick={onLogoutClikckHandler}>Logout</button>
                        {/*<Avatar src={props.userPhotoSmall ? props.userPhotoSmall : defaultUserPhoto }/>*/}
                    </>
                    : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>

    )
}

export default Header;


