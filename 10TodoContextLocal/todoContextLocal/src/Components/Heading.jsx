import React, { useEffect } from 'react';
import Typed from 'typed.js';
function Heading() {
    // To create a reference.
    const el = React.useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["<i>Add</i>", "<i>Update</i>", "<i>Delete</i>"],
            typeSpeed: 100,
            loop: true,
            loopCount: Infinity,
        });
        return () => {
            typed.destroy();
        };

    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-8 mt-2">Manage Your  Todos <span ref={el} className='text-[#008DDA]'></span></h1>
        </div>
    );
}

export default Heading;
