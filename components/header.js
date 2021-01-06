import React from 'react';
import NavLink from './navLink';
import styles from '../styles/header.module.css';

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.name}>Pjotr Anohhin</h3>
            <ul className={styles.links}>
                <NavLink href="/projects">Projects</NavLink>
            </ul>
        </div>
    );
};

export default Header;
