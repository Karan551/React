import React from 'react';
import ListItem from './ListItem';

const List = ({ items }) => {
    return (
        <ul>

            {
                items.map((eachItem) => (
                    <ListItem key={eachItem.id} eachItem={eachItem} />
                ))
            }
        </ul>
    );
};

export default List;
