import React from 'react';
import { css } from '@emotion/react';

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
            `}
        >
            <h2>Contact me</h2>
            <div className="divider" />
            <p>
                <span>E-mail:</span>{' '}
                <a href="mailto: tdoregani@hotmail.com">
                    tdoregani@hotmail.com
                </a>
            </p>
            <p>
                <span>Telegram:</span>{' '}
                <a target="_blank" href="https://t.me/hlorellium">
                    @hlorellium
                </a>
            </p>
            <p>
                <span>LinkedIn:</span>{' '}
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/pjotr-anohhin-86475b1aa/"
                >
                    https://www.linkedin.com/in/pjotr-anohhin-86475b1aa/
                </a>
            </p>
            <p>
                <span>Github:</span>{' '}
                <a
                    target="_blank"
                    href="https://github.com/hlorellium"
                >
                    https://github.com/hlorellium
                </a>
            </p>
        </div>
    );
};

export default Contact;
