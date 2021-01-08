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
                    // css={{
                    //     visibility:
                    //         router.pathname === '/' ? 'hidden' : 'visible',
                    // }}
                    css={css`
                        visibility: ${router.pathname === '/'
                            ? 'hidden'
                            : 'visible'};
                        /* svg {
                            width: 100px;
                            height: 100px;
                            transform: scaleX(-1);
                            fill: var(--bg);
                            filter: invert(1);
                        } */
                    `}
                >
                    Pjotr Anohhin   
                </a>
            </Link>

            <ul className={styles.links}>
                <NavLink href="/">about</NavLink>
                <NavLink href="/projects">projects</NavLink>
                <NavLink href="/contact">contact</NavLink>
            </ul>
        </div>
    );
};

export default Header;
