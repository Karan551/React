import React from 'react';


const Footer = ({ totalData }) => {
    const today = new Date();
    return (
        <footer className='px-4 py-6 bg-sky-500 font-semibold text-center text-3xl'>
            {totalData ? (totalData.length == 1 ? `${totalData.length} Movie` : `${totalData.length} Movies`) : ""}
            Copyright &copy; {today.getFullYear()}
        </footer>
    );
};

export default Footer;