import React from 'react';
import NavLink from './navLink';
import styles from '../styles/header.module.css';
import Link from 'next/link';
import ThemeSwitcher from './themeSwitcher';

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <Link href="/">
                <a className={styles.name}>About</a>
            </Link>

            <ul className={styles.links}>
                <NavLink href="/projects">Projects</NavLink>
            </ul>
            <ThemeSwitcher />
        </div>
    );
};

export default Header;
