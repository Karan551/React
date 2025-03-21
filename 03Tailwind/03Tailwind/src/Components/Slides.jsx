import React, { useState } from "react";

function Slides({ slides }) {

    const [index, setIndex] = useState(0);


    console.log("this is slides::", slides);

    const handleNext = () => {
        setIndex(index + 1);
    };

    const handlePrev = () => {
        setIndex(index - 1);
    };

    const handleRestart = () => {
        setIndex(0);

    };

    console.log("this is index value::", index);

    // setTitle(slides[index].text);

    return (
        <div>
            <div id="navigation" className="text-center justify-center items-center flex space-x-4">
                <button data-testid="button-restart" className="px-6 py-4 text-white text-xl rounded-xl font-semibold bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    onClick={handleRestart}
                    disabled={index == 0}
                >
                    Restart
                </button>
                <button data-testid="button-prev" className="px-6 py-4 text-white text-xl rounded-xl font-semibold bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed"

                    onClick={handlePrev}
                    disabled={index == 0}
                >
                    Prev
                </button>
                <button
                    data-testid="button-next"
                    className="px-6 py-4 text-white text-xl rounded-xl font-semibold bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    onClick={handleNext}
                    disabled={index == slides.length - 1}

                >
                    Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[index].title}</h1>
                <p data-testid="text">{slides[index].text}</p>
            </div>
        </div>
    );
}

export default Slides;
