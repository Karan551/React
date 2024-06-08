import React, { useEffect, useState } from 'react';


function LoadProducts({ url, limit, skip }) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [count, setCount] = useState(0);
    const [disableBtn, setDisableBtn] = useState(false);

    async function getProducts() {
        try {
            setLoading(true);
            const response = await fetch(`${url}?limit=${limit}&skip=${count == 0 ? 0 : count * 20}`);

            const data = await response.json();

            if (data && data.products && data.products.length > 0) {

                setLoading(false);
                setProducts((prevData) => [...prevData, ...data.products]);
            }
          

        } catch (error) {
            setLoading(false);
            setErrorMsg(error.message);
        }
    }


    useEffect(() => {
        getProducts();
    }, [count]);


    useEffect(() => {
        if (products && products.length === 100) setDisableBtn(true);

    }, [products]);

    // console.log('this is actual products', products);

    if (loading) {
        return <div>Data is Loading Please Wait.</div>;
    }


    if (errorMsg) {
        return <div>Something Went Wrong {errorMsg}</div>;
    }

    

    return (
        <div className='continer'>
            <div className="product-container">
                {
                    products && products.length > 0 ?
                        products.map((eachProduct, index) => (
                            <div className="products" key={index}>

                                <img src={eachProduct.thumbnail} alt={eachProduct.title} />
                                <p className='product-title'>{eachProduct.title}</p>
                            </div>
                        ))

                        : null
                }
            </div>
            <div className="btn-container">
                <button
                    className='btn'
                    onClick={() => setCount(count + 1)}
                    disabled={disableBtn}
                >Load More Products</button>
                {disableBtn ? <p className='para'>You reached 100 products.</p> : null}
            </div>

        </div>
    );
}

export default LoadProducts;
