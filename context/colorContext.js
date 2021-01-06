import { createContext, useState } from 'react';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
    const colorPalettes = {
        red: {
            link: '#0D0D0D',
            bg: '#BF382C',
            projectCard: '#ffffff',
            projectFont: '#404040',
            font: '#ffffff',
            invertedFont: '#0D0D0D',
        },
    };

    const [currentPalette, setCurrentPallete] = useState(colorPalettes.red);
    return (
        <ColorContext.Provider
            value={{
                currentPalette,
                setCurrentPallete,
                colorPalettes,
            }}
        >
            {children}
        </ColorContext.Provider>
    );
};
