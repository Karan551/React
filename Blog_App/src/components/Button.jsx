

export default function Button({
    children,
    cssClass = "",
    type = "button",
    bgColor = "bg-blue-500",
    textColor = "text-white",
    ...props
}) {
    let hoverBgColor = bgColor.slice(0, -3) + (Number(bgColor.slice(-3,)) + 200);
    // console.log("this is value of a::", hoverBgColor, typeof (hoverBgColor));
    hoverBgColor = `hover:${hoverBgColor}`;
    hoverBgColor="hover:bg-blue-700"
    // // a = "bg-blue-500";

    return (
        <button className={`px-4 rounded-lg py-2 ${cssClass}
        ${textColor} ${bgColor} ${hoverBgColor}`}
            {...props}
            type={type}
        >
            {children}

        </button>
    );
}
