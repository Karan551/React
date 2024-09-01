import React from 'react';

const Square = ({ colorName, hexColorName, isDarkText }) => {

    const toTitleCase = (text) => {
        return text[0].toUpperCase() + text.slice(1,).toLowerCase();
    };

    return (

        <section className="square"
            style={{ backgroundColor: colorName, color: isDarkText ? "#000" : "#fff" }}
        >
            <p>{colorName ? toTitleCase(colorName) : "Empty Value"}</p>
            <p>{hexColorName ? hexColorName : null}</p>

        </section>
    );
};

export default Square;
