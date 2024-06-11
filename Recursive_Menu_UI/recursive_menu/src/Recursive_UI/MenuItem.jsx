import React from 'react';

function MenuItem({ item = {} }) {
    console.log("This is menu Item :", item);
    return (
        <div>
            {/* <h2>This is menu item</h2> */}
            <p>{item.label}</p>

            {
                item && item.children && item.children.length > 0
                    ?
                    {/* yehan se code likhna hai. */ }
                        (<span>{item.label}</span>)

                    : null
            }



        </div>
    );
}

export default MenuItem;
