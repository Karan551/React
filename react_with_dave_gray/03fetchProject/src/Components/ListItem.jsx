import React from 'react';


const ListItem = ({ eachItem }) => {

    return (

        <li>
            {JSON.stringify(eachItem)}
        </li>

    );
};

export default ListItem;
