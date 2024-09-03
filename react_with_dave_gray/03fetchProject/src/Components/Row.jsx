import React from 'react';
import Cells from './Cells';

const Row = ({ eachItem }) => {
    // console.log("this is items in row", eachItem);
    return (
        <tr>
            {
                Object.entries(eachItem).map(([key,value]) => (
                    <Cells id={key} cellData={value} />
                ))
            }
        </tr>
    );
};

export default Row;
