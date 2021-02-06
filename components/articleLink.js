import React from 'react';
import { css } from '@emotion/react';

const ArticleLink = ({ icon, url }) => {
    return (
        <div
            css={css`
                svg {
                    width: 2rem;
                    height: 2rem;
                    margin-right: 1rem;
                }
                svg path {
                    fill: white;
                }
                margin: 0.5rem 1rem;
                display: flex;
                align-items: center;
            `}
        >
            {icon}
            <a rel="noopener noreferrer" target="_blank" href={url}>
                {url}
            </a>
        </div>
    );
};

export default ArticleLink;
