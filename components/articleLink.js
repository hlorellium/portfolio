import React from 'react';
import { css } from '@emotion/react';

const ArticleLink = ({ icon, url }) => {
    return (
        <a
            rel="noopener noreferrer"
            target="_blank"
            href={url}
            css={css`
                display: flex;
                align-items: center;
                margin: 1rem 0;
                :hover {
                    text-decoration: underline;
                    color: var(--link);
                }
                svg {
                    width: 1.8rem;
                    height: 1.8rem;
                    margin-right: 1rem;
                }
                svg path {
                    fill: var(--font);
                }
                svg rect {
                    fill: var(--font);
                }
                :hover svg path {
                    fill: var(--link);
                }
                :hover svg rect {
                    fill: var(--link);
                }
            `}
        >
            {icon}
            {url}
        </a>
    );
};

export default ArticleLink;
