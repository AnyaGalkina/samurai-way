import React from 'react';
import styles from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={styles.nav}>
            <div>
                <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" activeClassName={styles.active}>Message</NavLink>
            </div>
            <div>
                <NavLink to="/news" activeClassName={styles.active}>News</NavLink>
            </div>
            <div>
                <NavLink to="/music" activeClassName={styles.active}>Music</NavLink>
            </div>
            <div>
                <NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink>
            </div>
            <div>
                <NavLink to="/developers" activeClassName={styles.active}>Friends</NavLink>
            </div>
        </div>
    );
};

export default NavBar;