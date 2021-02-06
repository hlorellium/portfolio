import { createContext, useState } from 'react';
import Cookies from 'js-cookie';
import { colorPalettes } from '../utils/colorPalettes.js';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
    const [currentPalette, setCurrentPallete] = useState(
        colorPalettes[Cookies.get('palette') || 'white']
    );
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
