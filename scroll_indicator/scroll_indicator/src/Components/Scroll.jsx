import React, { useEffect, useState } from 'react';

function Scroll({ url }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [scrollPercent, setScrollPercent] = useState(0);

    async function getData(getUrl) {
        try {
            setLoading(true);

            const response = await fetch(getUrl);
            const data = await response.json();


            if (data && data.products && data.products.length > 0) {
                setLoading(false);
                setProducts(data.products);
            }

        } catch (error) {
            setLoading(false);
            console.log("Error in Data Loading.", error.message);
        }
    }


    useEffect(() => {
        getData(url);

    }, [url]);


    // console.log("This is our products", products);



 

    function handleScroll() {
        let totalScrollHeight = document.documentElement.scrollHeight;

        /* console.log(
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight,
        ); */

        const howMuchScrolled = document.documentElement.scrollTop;

        const height = totalScrollHeight - document.documentElement.clientHeight;



        const requirePercent = (howMuchScrolled / height) * 100;

        setScrollPercent(requirePercent);




    }


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // It is used for optimization to remove scroll event.

        return () => {
            window.removeEventListener("scroll", () => { });
        };

    }, []);



    


    if (loading) {
        return <div>Data is Loading Please Wait.</div>;
    }

    if (errorMsg) {
        return <div>Something Went Wrong:-{errorMsg}</div>;
    }


    return (
        <>
            <div className="top-container">
                <h1>Scroll Indicator</h1>
                <div className="scroll-progress-container">
                    <div className="current-progress-bar"
                        style={{ width: `${scrollPercent}%` }}
                    >


                    </div>


                </div>
            </div>

            {/* ------ */}
            <div className='item-container'>
                {
                    products && products.length > 0 ?
                        products.map((eachObject, index) => (
                            <div key={index} className="card">
                            <div className="card-image">
                                <img src={eachObject.thumbnail} alt={`${eachObject.title}-img`} />
                            </div>
                            <div className="product-name">
                                <h2>{eachObject.title}</h2>
                            </div>


                            </div>))

                        : null
                }
            </div>
        </>
    );
}

export default Scroll;
