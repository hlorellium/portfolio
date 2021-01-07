import React from 'react';
import ColorCircle from './colorCircle';

const ThemeSwitcher = () => {
    return (
        <>
            <style jsx>{`
                ul {
                    margin: 0 2rem;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    list-styles: none;
                }
            `}</style>
            <ul>
                <ColorCircle color="red" />
                <ColorCircle color="white" />
                <ColorCircle color="blue" />
            </ul>
        </>
    );
};

export default ThemeSwitcher;
