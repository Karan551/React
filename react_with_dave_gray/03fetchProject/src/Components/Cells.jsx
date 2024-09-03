import React from 'react';

const Cells = ({ cellData }) => {
    return (
        <td>
            {JSON.stringify(cellData)}
        </td>
    );
};

export default Cells;
