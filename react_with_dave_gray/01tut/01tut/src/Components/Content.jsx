import ItemList from './ItemList';

const Content = ({ items, handlCheck, handleDelete }) => {

    return (
        <main className='main'>
            {
                items.length ?
                    <ItemList 
                    items={items} 
                    handlCheck={handlCheck} 
                    handleDelete={handleDelete} 
                    />
                    : <p>No List Items available</p>
            }
        </main>
    );
};

export default Content;
