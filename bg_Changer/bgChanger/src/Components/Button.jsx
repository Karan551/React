import React from 'react';

const Button = ({ btnText = "Red", btnColor = 'red' }) => {
    btnText=btnText[0].toUpperCase()+btnText.slice(1,)
    return (
        <>
            <button onClick={()=>{return(handleColor())}}
            className='inline-block px-6 py-4 rounded  text-2xl text-[#f5f5f5] hover:text-slate-300 hover:scale-110' style={{backgroundColor:btnColor}}>{btnText}</button>
        </>
    );
};

export default Button;
