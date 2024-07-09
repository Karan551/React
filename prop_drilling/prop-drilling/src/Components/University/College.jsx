import React from 'react';
import Branch from './Branch';

function College({ collegeData }) {
    return (
        <div>
            <h1>This is College Where Students are reading.</h1>
            <Branch branchData={collegeData} />
        </div>
    );
}

export default College;
