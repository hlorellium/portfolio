import React from 'react';
import NavLink from './navLink';
import styles from '../styles/header.module.css';
import Link from 'next/link';
import ThemeSwitcher from './themeSwitcher';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    console.log(router.pathname);
    return (
        <div className={styles.wrapper}>
            <style jsx>
                {`
                    .name {
                        visibility: ${router.pathname === '/' ? 'hidden' : 'visible'};
                    }
                `}
            </style>
            <Link href="/">
                <a className={`${styles.name} name`}>Pjotr Anohhin</a>
            </Link>

            <ul className={styles.links}>
                <NavLink href="/">about</NavLink>
                <NavLink href="/projects">projects</NavLink>
                <NavLink href="/">contact</NavLink>
            </ul>
        </div>
    );
};

export default Header;
