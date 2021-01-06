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
                div {
                    background-color: ${colorPalettes[color].bg};
                    width: 1.1rem;
                    height: 1.1rem;
                    border-radius: 100%;
                    margin: 0;
                    display: ${colorPalettes[color].bg === currentPalette.bg
                        ? 'none'
                        : 'block'};
                    cursor: pointer;
                }
            `}</style>
            <div
                onClick={() => {
                    setCurrentPallete(colorPalettes[color]);
                    Cookies.set('palette', color);
                }}
            ></div>
        </>
    );
};

export default ColorCircle;
