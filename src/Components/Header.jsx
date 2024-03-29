import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../style/NavBar.module.css';

function Header() {
    return (
        <div>
            <nav className={styles.navMenu}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/sign-in">Sign in</NavLink>
                <NavLink to="/sign-up">Sign up</NavLink>
                <NavLink to="/welcome">Welcome</NavLink>
            </nav>
        </div>
    )
}

export default Header