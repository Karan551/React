import React from 'react';

const Button = ({ btnText,setBtnText,styles = "bg-red-500 hover:bg-red-700", setColor, }) => {

    btnText = btnText[0]?.toUpperCase() + btnText.slice(1,);


    return (
        <>
            <button
                onClick={() => {setColor(btnText),setBtnText(btnText)}}
                className={`inline-block px-6 py-4 rounded-2xl  text-2xl text-[#f5f5f5] border border-gray-600 hover:text-slate-300 focus:border-indigo-600 hover:scale-110 capitalize ${styles}`}
            >
                {btnText}
            </button>
        </>
    );
};

export default Button;
