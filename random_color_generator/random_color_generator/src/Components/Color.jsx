import React, { useEffect, useState } from 'react';
import '../index.css';
const Color = () => {

    const [generate, setGenerate] = useState(false);
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('black');

    const randomNumber = (length) => {
        return Math.floor(Math.random() * length);
    };

    console.log(color);

    const handleHexColor = () => {
        const hexString = "0123456789ABCDEF";
        let hexColor = '#';

        for (let i = 1; i <= 6; i++) {
            hexColor += hexString[randomNumber(hexString.length)];
        }
        /*  console.log("\n");
         console.log('This is final temp value:', hexColor); */
        setColor(hexColor);
        setTypeOfColor('hex');

    };


    const handleRGBColor = () => {
        const redColor = randomNumber(256);
        const greenColor = randomNumber(256);
        const blueColor = randomNumber(256);

        const rgbColor = `rgb(${redColor},${greenColor},${blueColor})`;

        setColor(rgbColor);
        setTypeOfColor("rgb");

    };

    const cssObject = {
        backgroundColor: color,
        minHeight: "100vh",
        mihWidth: "100vw"
    };



    return (
        <>
            <main style={cssObject} className='main-container'>
                <div className='wrapper'

                >
                    <div className='btn-container'>

                        <button className='btn'
                            onClick={() => setGenerate(!generate)}
                        >Generate Random Color {generate ? "ON" : "OFF"}</button>
                    </div>
                    <div className='btn-container'>

                        <button className='btn' onClick={() => (generate && handleHexColor())}>HEX Color</button>
                    </div>
                    <div className='btn-container'>

                        <button className='btn' onClick={() => (generate && handleRGBColor())}>RGB Color</button>
                    </div>



                </div>
                <div className='color-name'>
                    <h2>{typeOfColor === "rgb" ? "RGB" : "HEX"} Color</h2>
                    <div className='color-value'>
                    <h3>{color}</h3>
                    <button className='btn copy-button'>Copy</button>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Color;
