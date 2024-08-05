import React, { useId } from 'react';


function Select({ label, className = "", options, ...props }, ref) {
    const id = useId();
    return (
        <div className='w-full'>
            {
                label && <label htmlFor={id}>{label}</label>
            }
            <select id={id} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} ref={ref} {...props}>
                <option value="">Please Select an option</option>
                {
                    options?.map((eachOption) => (
                        <option key={eachOption} value={eachOption}>{eachOption}</option>
                    ))
                }
            </select>

        </div>
    );
}
/* 
<select>
<option value={}>{value}</option>
</select>

*/
export default React.forwardRef(Select);
