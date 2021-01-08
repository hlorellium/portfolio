import React from 'react';
import { css, jsx } from '@emotion/react';
import NavLink from './navLink';
import styles from '../styles/header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    return (
        <div className={styles.wrapper}>
            <Link href="/">
                <a
                    className={styles.name}
                    css={{
                        visibility:
                            router.pathname === '/' ? 'hidden' : 'visible',
                    }}
                >
                    Pjotr Anohhin
                </a>
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
