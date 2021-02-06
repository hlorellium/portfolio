import React from 'react';
import { css } from '@emotion/react';
import { ReactComponent as EmailIcon } from '../public/icons/email.svg';
import { ReactComponent as GithubIcon } from '../public/icons/github.svg';
import { ReactComponent as LinkedinIcon } from '../public/icons/linkedin.svg';
import { ReactComponent as TelegramIcon } from '../public/icons/telegram.svg';
import Head from 'next/head';

const Contact = () => {
    return (
        <>
            <Head>
                <title>Contact</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <div
                css={css`
                    width: 60vw;
                    .divider {
                        width: 80px;
                        height: 2px;
                        background-color: var(--font);
                        margin: 1rem 0;
                    }
                    span {
                        opacity: 0.9;
                    }
                    a {
                        display: flex;
                        align-items: center;
                        margin: 1rem 0;
                    }
                    a:hover {
                        text-decoration: underline;
                        color: var(--link);

                    }
                    svg {
                        width: 1.5rem;
                        height: 1.5rem;
                        margin-right: 1rem;
                    }
                    svg path {
                        fill: var(--font);
                    }
                    svg rect {
                        fill: var(--font);
                    }
                    a:hover svg path {
                        fill: var(--link);
                    }
                    a:hover svg rect {
                        fill: var(--link);
                    }
                `}
            >
                <h2>Contact me</h2>
                <div className="divider" />

                <a href="mailto: tdoregani@hotmail.com">
                    <EmailIcon />
                    tdoregani@hotmail.com
                </a>

                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/pjotr-anohhin-86475b1aa/"
                >
                    <LinkedinIcon />
                    https://www.linkedin.com/in/pjotr-anohhin-86475b1aa/
                </a>

                <a target="_blank" href="https://github.com/hlorellium">
                    <GithubIcon />
                    https://github.com/hlorellium
                </a>

                <a target="_blank" href="https://t.me/hlorellium">
                    <TelegramIcon />
                    @hlorellium
                </a>
            </div>
        </>
    );
};

export default Contact;
