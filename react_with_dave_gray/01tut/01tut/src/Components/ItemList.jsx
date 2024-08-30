import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import LineItem from './LineItem';


const ItemList = ({ items, handlCheck, handleDelete }) => {
    return (
        <ul>
            {
                items.map((eachItem) => (
                   
                    <LineItem
                        key={eachItem.id}
                        eachItem={eachItem}
                        handlCheck={handlCheck}
                        handleDelete={handleDelete}
                    />
                ))
            }
        </ul>
    );
};

export default ItemList;
