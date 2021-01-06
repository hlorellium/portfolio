import React from 'react';
import { useContext } from 'react';
import { ColorContext } from '../context/colorContext';

const GlobalStyles = () => {
    const { currentPalette } = useContext(ColorContext);

    return (
        <style global jsx>{`
            :root {
                --link: ${currentPalette.link};
                --bg: ${currentPalette.bg};
                --projectCard: ${currentPalette.projectCard};
                --projectFont: ${currentPalette.projectFont};
                --font: ${currentPalette.font};
                --invertedFont: ${currentPalette.invertedFont};
                --lightShadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                --darkShadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                --transition: all 0.25s ease-in-out;
                --radius: 0.25rem;
            }
        `}</style>
    );
};

export default GlobalStyles;
