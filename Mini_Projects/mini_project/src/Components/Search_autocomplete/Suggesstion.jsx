import React from 'react';

function Suggesstion({ data, handleClick }) {
    return (
        <div className='suggestion-container'>
            <ul className='suggestion-data'>
                {
                    data && data.length > 0
                        ? data.map((eachItem, index) =>
                            <li key={index} onClick={handleClick} className='content'>{eachItem}</li>
                        )


                        : null
                }
            </ul>
        </div>
    );
}

export default Suggesstion;
