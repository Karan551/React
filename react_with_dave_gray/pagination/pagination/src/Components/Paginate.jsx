import React from 'react';

function Paginate({ pageNumber, setPageNumber, isPlaceholderData, posts, totalPages, loading }) {

    const pageArray = "";

    return (
        <>

            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-sm">
                    <li>
                        <button
                            href="#"
                            className="flex items-center justify-center px-3 h-8 m-0 leading-tight text-gray-500 bg-white border  border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700  
                            shadow-none
                            disabled:opacity-50
                            "
                            disabled={pageNumber === 1}
                            onClick={() => setPageNumber(prev => prev - 1)}
                        >
                            Previous
                        </button>
                    </li>

                    {
                        Array.from({ length: totalPages }, (_, index) => (
                            <button
                                key={index}

                                onClick={() => setPageNumber(index + 1)}
                                className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                            >{index + 1}</button>
                        ))
                    }


                    <li>
                        <button

                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
                            disabled:opacity-50
                            "
                            onClick={() => setPageNumber(next => next + 1)}

                            disabled={isPlaceholderData || !posts}

                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>



            <div>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => {
                            //   setCurrentPage(index + 1);
                            setPageNumber(prev => prev + 1);
                            // Reset items if going back to page 1
                            //   if (index + 1 === 1) {
                            //     setItems([]);
                            //     setTotalLoadedItems(0);
                            //   }
                        }}
                    // disabled={loading || currentPage === index + 1}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>

            {loading && <p>Loading...</p>}
            {totalPages > pageNumber && !loading && (
                <button onClick={() => setCurrentPage(currentPage + 1)}>
                    Load More
                </button>
            )}

        </>

    );
}

export default Paginate;
