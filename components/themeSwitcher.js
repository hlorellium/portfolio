import React from 'react';
import ColorCircle from './colorCircle';
import { css } from '@emotion/react'

const ThemeSwitcher = () => {
    return (
        <ul
            css={css`
                margin: 0 2rem;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                list-styles: none;
            `}
        >
            <ColorCircle color="red" />
            <ColorCircle color="white" />
            <ColorCircle color="blue" />
        </ul>
    );
};

export default ThemeSwitcher;
