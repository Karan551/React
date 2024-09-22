import React, { useRef, useEffect } from 'react';
import Typed from "typed.js";

export default function Heading() {
    const el = useRef(null);

    useEffect(() => {

        const typed = new Typed(el.current, {
            strings: ['Movie', 'WebSeries'],
            typeSpeed: 50,
            loop: true,
            loopCount: Infinity,

        });

        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <h1 className='text-3xl font-semibold my-3 text-center'>
          Search <span ref={el} />
        </h1>
    );
}
