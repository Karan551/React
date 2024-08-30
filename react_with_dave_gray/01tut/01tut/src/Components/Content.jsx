import React, { useState, useEffect } from 'react';
import { data } from "../data";
import { FaTrashAlt } from "react-icons/fa";
const Content = () => {

    const storedData = JSON.parse(localStorage.getItem("shopplingList"));

    const [items, setItems] = useState(storedData && storedData.length ? storedData : data);





    const handlCheck = (id) => {

        const listItems = items.map((eachObject) => (eachObject.id === id ? { ...eachObject, checked: !eachObject.checked } : eachObject));

        setItems(listItems);

        localStorage.setItem("shopplingList", JSON.stringify(listItems));
    };

    const handleDelete = (id) => {
        const listItems = items.filter((eachObject) => eachObject.id !== id);

        setItems(listItems);
        localStorage.setItem("shopplingList", JSON.stringify(listItems));
    };

    return (
        <main className='main'>
            {
                items.length ?
                    (
                        <ul>

                            {
                                items.map((eachItem) => (
                                    <li key={eachItem.id} className='item'>

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
                                        />

                                    </li>
                                ))
                            }
                        </ul>
                    )
                    : <p>No List Items available</p>
            }
        </main>
    );
};

export default Content;
