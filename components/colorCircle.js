import React, { useContext } from 'react';
import { ColorContext } from '../context/colorContext';
import Cookies from 'js-cookie';

const ColorCircle = ({ color }) => {
    const { colorPalettes, currentPalette, setCurrentPallete } = useContext(
        ColorContext
    );

    return (
        <>
            <style jsx>{`
                li {
                    display: ${colorPalettes[color].bg === currentPalette.bg
                        ? 'none'
                        : 'block'};
                }
                div {
                    background-color: ${colorPalettes[color].bg};
                    width: 1.1rem;
                    height: 1.1rem;
                    border-radius: 100%;
                    margin: 0;
                    cursor: pointer;
                }
            `}</style>
            <li>
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
