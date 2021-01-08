import React, { useContext } from 'react';
import { ColorContext } from '../context/colorContext';
import Cookies from 'js-cookie';
import { css } from '@emotion/react'

const ColorCircle = ({ color }) => {
    const { colorPalettes, currentPalette, setCurrentPallete } = useContext(
        ColorContext
    );

    return (
        <>
            <li
                css={css`
                    display: ${colorPalettes[color].bg === currentPalette.bg
                        ? 'none'
                        : 'block'};
                    margin: 0 0.3rem;

                    div {
                        background-color: ${colorPalettes[color].bg};
                        width: 1.1rem;
                        height: 1.1rem;
                        border-radius: 100%;
                        margin: 0;
                        cursor: pointer;
                        display: ${colorPalettes[color].bg === currentPalette.bg
                            ? 'none'
                            : 'block'};
                    }
                `}
            >
                <div
                    onClick={() => {
                        setCurrentPallete(colorPalettes[color]);
                        Cookies.set('palette', color);
                    }}
                ></div>
            </li>
        </>
    );
};

export default ColorCircle;
