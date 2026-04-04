import React from 'react';

const SummaryCards = ({ title, value }) => {
    return (
        <div className='bg-white p-4 shodow rounded-2'>
            <h3 className='text-gray-600'>{title}</h3>
            <p className='text-xl font-semibold'>{value}</p>
        </div>
    );
};

export default SummaryCards;