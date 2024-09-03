import React from 'react';

const Button = ({ btnText, reqType,setReqType }) => {

    const titleCase = (text) => {
        if (isNaN(text))
            return text[0].toUpperCase() + text.slice(1,).toLowerCase();
    };

    return (
        <button
            className={btnText === reqType ? "selected" : null}
            type="button"
            onClick={() => setReqType(btnText)}
        >{titleCase(btnText)}</button>
    );
};

export default Button;
