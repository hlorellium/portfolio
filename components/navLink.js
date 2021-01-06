import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/header.module.css';


const NavLink = ({ children, href }) => {
    const { pathname } = useRouter();

    return (
        <li>
            <Link href={href}>
                <a className={pathname === href ? styles.active : ''}>
                    {children}
                </a>
            </Link>
        </li>
    );
};

export default NavLink;
