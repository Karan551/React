import ItemList from './ItemList';

const Content = ({ items, handlCheck, handleDelete,css_styles }) => {

    return (
        <>
            {
                items.length ?
                    <ItemList
                        items={items}
                        handlCheck={handlCheck}
                        handleDelete={handleDelete}
                    />
                    : <p style={{...css_styles,color:"dodgerblue"}}>Your List is Empty.</p>
            }
        </>
    );
};

export default Content;
