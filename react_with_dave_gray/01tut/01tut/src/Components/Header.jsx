import React from 'react';

const Header = ({ title = "Grocery List" }) => {
    return (
        <header>
            {title}
        </header>
    );
};

export default Header;
