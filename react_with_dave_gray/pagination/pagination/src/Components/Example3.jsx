import React, { useEffect, useState } from 'react';
import { getPhotos } from '../api/axios';
import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query';
import Paginate from './Paginate';

const Example3 = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [result, setResult] = useState([]);
    const [totalLoadedItems, setTotalLoadedItems] = useState(0);
    const queryClient = useQueryClient();

    const ITEMS_PER_PAGE = 9;

    const { status, isLoading, data, isFetching, isError, error, isPlaceholderData, isSuccess } = useQuery({
        queryKey: ['photos', pageNumber],
        queryFn: async () => await getPhotos(pageNumber),
        placeholderData: keepPreviousData,
        staleTime: 5000,
    });
    console.log("this is third component", data, isSuccess);
    const totalPages = Math.ceil(totalLoadedItems / ITEMS_PER_PAGE);

    useEffect(() => {
        if (data) {

            setResult((prev) => [...prev, ...data]);
            setTotalLoadedItems((prev) => prev + data.length);
        }
    }, [data]);


    useEffect(() => {
        if (!isPlaceholderData) {
            queryClient.prefetchQuery({
                queryKey: ['photos', pageNumber],
                queryFn: () => getPhotos(pageNumber + 1),
            });
        }

    }, [pageNumber, queryClient]);




    if (isLoading || isFetching)
        return <div className="error-message">
            Loading....<p className="loader"></p>
        </div>;
    if (isError)
        return <h1>Error : {error.message}</h1>;



    return (
        <main className='container'>

            {
                data.map((eachObject) => (
                    <section key={eachObject.id} className='card'>
                        {/* <img src={eachObject.thumbnailUrl}/> */}
                        <img src={eachObject.thumbnailUrl} alt={`${eachObject.id}-img`} className='' />
                        <h2 className='text-center p-2'>User Id {eachObject.id}</h2>
                        <h2 className='text-center p-2'>Album Id {eachObject.albumId}</h2>
                        <p>Title :{eachObject.title}</p>
                    </section>
                ))
            }

            <Paginate length={data.length} pageNumber={pageNumber} setPageNumber={setPageNumber} isPlaceholderData={isPlaceholderData} posts={data} totalPages={totalPages} loading={isLoading} />
        </main>
    );
};

export default Example3;
