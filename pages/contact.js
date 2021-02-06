import React from 'react';
import { css } from '@emotion/react';
import { ReactComponent as EmailIcon } from '../public/icons/email.svg';
import { ReactComponent as GithubIcon } from '../public/icons/github.svg';
import { ReactComponent as LinkedinIcon } from '../public/icons/linkedin.svg';
import { ReactComponent as TelegramIcon } from '../public/icons/telegram.svg';

const Contact = () => {
    return (
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
                }
                a:hover {
                    text-decoration: underline;
                }
                svg {
                    width: 1.5rem;
                    height: 1.5rem;
                    margin-right: 1rem;
                }
                svg path {
                    fill: var(--font);
                }
                p {
                    display: flex;
                    align-items: center;
                }
            `}
        >
            <h2>Contact me</h2>
            <div className="divider" />
            <p>
                <EmailIcon />

                <a href="mailto: tdoregani@hotmail.com">
                    tdoregani@hotmail.com
                </a>
            </p>
            <p>
                <TelegramIcon />

                <a target="_blank" href="https://t.me/hlorellium">
                    @hlorellium
                </a>
            </p>
            <p>
                <LinkedinIcon />

                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/pjotr-anohhin-86475b1aa/"
                >
                    https://www.linkedin.com/in/pjotr-anohhin-86475b1aa/
                </a>
            </p>
            <p>
                <GithubIcon />

                <a target="_blank" href="https://github.com/hlorellium">
                    https://github.com/hlorellium
                </a>
            </p>
        </div>
    );
};

export default Contact;
