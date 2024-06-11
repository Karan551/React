import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ list = [] }) {
    console.log("This is menu. In Menu File", list);


    return (
        <div className='menu'>
            {
                list && list.length > 0
                    ?
                    list.map((eachMenuItem) => <MenuItem item={eachMenuItem} />)


                    : null
            }
            {/* <MenuItem/> */}
        </div>
    );
}

export default MenuList;
