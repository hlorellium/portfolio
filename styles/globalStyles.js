import React from 'react';
import { useContext } from 'react';
import { Global, css } from '@emotion/react';
import { ColorContext } from '../context/colorContext';

const GlobalStyles = () => {
    const { currentPalette } = useContext(ColorContext);

    return (
        <Global
            styles={css`
                :root {
                    --link: ${currentPalette.link};
                    --bg: ${currentPalette.bg};
                    --projectCard: ${currentPalette.projectCard};
                    --projectFont: ${currentPalette.projectFont};
                    --font: ${currentPalette.font};
                    --invertedFont: ${currentPalette.invertedFont};
                    --lightShadow: 0 5px 15px rgba(0, 0, 0, 0.15);
                    --darkShadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                    --transition: all 0.25s ease-in-out;
                    --radius: 0.25rem;
                    --secFont: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                }
            `}
        />
    );
};

export default GlobalStyles;
