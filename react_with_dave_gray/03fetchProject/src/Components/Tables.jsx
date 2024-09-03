import React from 'react';
import Cells from './Cells';
import Row from './Row';

const Tables = ({ items }) => {
  
    return (
        <div className="table-container">
            <table>
                <tbody>
                    {
                        items.map((eachItem) => (
                            <Row key={eachItem.id} eachItem={eachItem} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Tables;
