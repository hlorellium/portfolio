import React from 'react';
import NavLink from './navLink';
import styles from '../styles/header.module.css';
import Link from 'next/link';

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <Link href="/">
                <a className={styles.name}>Pjotr Anohhin</a>
            </Link>

            <ul className={styles.links}>
                <NavLink href="/projects">Projects</NavLink>
            </ul>
        </div>
    );
};

export default Header;
