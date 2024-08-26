import React, { useState } from 'react';

const Content = () => {
    const [name, setName] = useState("");
    const nameArr = ["Master", "Ganesh", "Mahesh", "Amitesh", "Alokesh"];


    const handleName = () => {
        const randomNum = Math.floor(Math.random() * nameArr.length);

        return setName(nameArr[randomNum]);
    };
    return (
        <main className='main'>
            <h1>Hello {name} !</h1>

            <div>
                <button type="button" onClick={handleName}>Click Me!</button>
            </div>
        </main>
    );
};

export default Content;
