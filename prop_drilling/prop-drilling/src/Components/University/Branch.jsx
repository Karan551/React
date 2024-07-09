import React from 'react';
import Student from './Student';

function Branch({ branchData }) {
  return (
    <div>
      <h1>This is Branch in College.</h1>
      <Student studentData={branchData} />
    </div>
  );
}

export default Branch;
