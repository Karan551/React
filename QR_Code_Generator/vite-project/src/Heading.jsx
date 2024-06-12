import React, { useEffect, useRef } from 'react';
import Typed from "typed.js";


function Heading() {
    const refElement = useRef(null);
    useEffect(() => {
        const typed = new Typed(refElement.current, {

            strings: ["<i>Generator</i>", "<i>Downloader</i>"],
            typeSpeed: 150,
            smartBackspace: true,
            loop: true,
            loopCount: Infinity,
            showCursor: true,

        });
        return () => {

            typed.destroy();
        };

    }, []);

    return (
        <div className='text-xl font-serif text-center mb-2 font-semibold text-black px-1 py-2 rounded-lg bg-gray-200  mt-1 sm:text-5xl sm:p-3 sm:font-sans '>
            Welcome To QR Code   <span ref={refElement} className='text-orange-500'></span>
        </div>
    );
}

export default Heading;
