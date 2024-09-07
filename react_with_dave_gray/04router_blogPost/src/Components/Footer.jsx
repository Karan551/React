import React from 'react';

const Footer = () => {
    const today = new Date();
    return (
        <footer className="Footer">
           Copyright &copy; {today.getFullYear()} - {String(today.getFullYear()+1).slice(-2,)}
        </footer>
    );
};

export default Footer;
