import React from 'react';
import Child from './Child';

const GrandChild = (props) => {
    return (
        <div>
            <h2>Grand Child</h2>
        <Child brand={props.brand} />
        </div>
    );
};

export default GrandChild;
