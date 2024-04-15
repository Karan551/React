import React from 'react';
import ThemeContext from '../Context/ThemeContext';
import { useContext } from 'react';

const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ThemeContext);

    return (
        <>
            <div onClick={() => {
                setThemeMode(themeMode === "light" ? "dark" : "light");

            }}>
                <span>{themeMode === "light" ? "Light Theme Activated" : "Dark Theme Activated."}</span>
            </div>
        </>

    );
};

export default ThemeToggler;