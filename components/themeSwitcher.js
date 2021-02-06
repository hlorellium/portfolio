import React from 'react';
import ColorCircle from './colorCircle';
import { css } from '@emotion/react';

const ThemeSwitcher = () => {
    return (
        <ul
            css={css`
                margin: 0 1rem;
                padding: 0;
                display: flex;
                // justify-content: center;
                align-items: center;
                list-styles: none;
                width: 15%;
                li {
                    margin: 0 0.4rem;
                    opacity: 0;
                    transition: visibility 0.3s linear, opacity 0.3s linear;
                }
                :hover > li {
                    visibility: visible;
                    opacity: 1;
                }
                li:first-of-type {
                    visibility: visible;
                    opacity: 1;
                }
            `}
        >
            <ColorCircle color="black" />
            <ColorCircle color="white" />
            <ColorCircle color="red" />
            <ColorCircle color="blue" />
        </ul>
    );
};

export default ThemeSwitcher;
