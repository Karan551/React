import React from 'react';
import colorNames from 'colornames';

const Input = ({ colorValue, setColorValue, setHexColorName, isDarkText, setIsDarkText }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                autoFocus
                type="text"
                placeholder="Add Color Name....."
                className='input'
                required
                value={colorValue}
                onChange={(e) => { setColorValue(e.target.value); setHexColorName(colorNames(e.target.value)); }}

            />
            <button
                type='button'
                onClick={() => setIsDarkText(!isDarkText)}

            >ToggleText</button>
        </form>
    );
};

export default Input

