import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
function StarRating({ noOfStars = 5 }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClick = (getCurrentIndex) => {

        setRating(getCurrentIndex);


    };
    const handleMouseMove = (getCurrentIndex) => {
        setHover(getCurrentIndex);
    };


    const handleMouseLeave = () => {
        setHover(rating);
    };


    return (
        <div className='star-rating'>
            {
                [...Array(noOfStars)].map((_, index) => {
                    index += 1;
                    return (

                        <FaStar
                            className={(index <= (rating || hover) ? "active" : "inactive") + " mx-2"}


                            key={index}
                            size={60}
                            onClick={() => handleClick(index)}
                            onMouseMove={() => handleMouseMove(index)}
                            onMouseLeave={() => handleMouseLeave()}
                        />
                    );
                })

            }

        </div>
    );
}

export default StarRating;
