import React from 'react';
import MenuList from './MenuList';

function TreeView({ menus = [] }) {

    console.log("This is menu. In TreeView File", menus);


    return (
        <div>
            <MenuList list={menus} />
        </div>
    );
}

export default TreeView;
