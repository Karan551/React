import React from 'react';
import { FaTrashAlt } from "react-icons/fa";


const LineItem = ({ eachItem, handlCheck, handleDelete }) => {
    return (

        <li className='item'>
            <input
                type="checkbox"
                onChange={() => handlCheck(eachItem.id)}
                checked={eachItem.checked}
            />

            <label style={eachItem.checked ? { textDecoration: "line-through" } : null}>{eachItem.item}</label>

            <FaTrashAlt
                role='button'
                tabIndex="0"
                onClick={() => handleDelete(eachItem.id)}
                aria-label={`Delete ${eachItem.item}`}
            />

        </li>
    );
};

export default LineItem;
