import React from 'react';
import { studentsData } from "../../data.js";
import College from './College.jsx';

function Universtiy() {
    const student_info = studentsData;
    return (
        <div>
            <h1>This is University.</h1>
            <College collegeData={student_info} />
        </div>
    );
}

export default Universtiy;
