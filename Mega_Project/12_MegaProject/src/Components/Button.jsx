import React from 'react';

function Button({
    btnText,
    type = "button",
    bgColor = "bg-blue-500",
    textColor = "text-white",
    className="",
    ...props
}) {
    return (
        <button className={`text-xl font-semibold mb-2 px-4 py-2 rounded-lg ${bgColor} hover:bg-blue-700 hover:cursor-pointer ${textColor} ${className} `} type={type} {...props}>
            {btnText}
        </button>
    );
}

export default Button;
