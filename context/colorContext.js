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
        white: {
            link: '#0D0D0D',
            bg: '#ffffff',
            projectCard: '#ffffff',
            projectFont: '#404040',
            font: '#0D0D0D',
            invertedFont: '#ffffff', 
        }
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
