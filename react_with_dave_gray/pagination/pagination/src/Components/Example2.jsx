import React, { useState, useEffect } from 'react';
import { getPosts, getUsersPage } from "../api/axios";
import { keepPreviousData, useQuery, useQueryClient } from '@tanstack/react-query';
import User from './User';
import PageButton from './PageButton';


export default function Example2() {
    const [pageNumber, setPageNumber] = useState(1);
    const [errorMsg, setErrorMsg] = useState("");
    // const [users, setUsers] = useState([]);

    const queryClient = useQueryClient();


    const { status, data: users, error, isFetching, isLoading, isPlaceholderData, isPreviousData } = useQuery({
        queryKey: ['users', pageNumber],
        queryFn: () => getUsersPage(pageNumber),
        placeholderData: keepPreviousData,
        staleTime: 2000,

    });

    console.log('This is data', users);
    useEffect(() => {
        if (!isPlaceholderData) {
            queryClient.prefetchQuery({
                queryKey: ['posts', pageNumber + 1],
                queryFn: () => getUsersPage(pageNumber + 1)
            });
        }

    }, [pageNumber, users, isPlaceholderData, queryClient]);


    if (isLoading || isFetching) {
        <div className="error-message">
            Loading....<p className="loader"></p>
        </div>;
    }
    // const firstPage = () => setPageNumber(1);
    // const lastPage = () => setPageNumber(users.total_pages);
    //---------------------------




    // console.log("total pages", users.total_pages, users?.hasMore);
    // console.log("1st page", firstPage);
    // console.log("last page", lastPage);


    const content = users?.data.map((user) => <User key={user.id} user={user} />);


    const pagesArray = Array(users?.total_pages).fill().map((_, index) => index + 1);
    // console.log("this is array", pageArray);
    // console.log("this is array----", users.hasMore);

    const prevPage = () => {
        setPageNumber(prev => prev - 1);
    };
    const nextPage = () => {
        setPageNumber(next => next + 1);
    };



    return (
        <main>
            <h2>Exmaple 2</h2>
            {
                status === 'pending' ?
                    <div className="error-message">
                        Loading....<p className="loader"></p>
                    </div>
                    : status === 'error' ?
                        <div>Error: {error.message}</div>
                        :
                        (
                            <section>
                                <nav className="nav-ex2">
                                    <button onClick={prevPage} disabled={isPreviousData || pageNumber === 1}>&lt;&lt;</button>
                                    {/* Removed isPreviousData from PageButton to keep button focus color instead */}
                                    {pagesArray.map(pg => <PageButton key={pg} pageNumber={pg} setPageNumber={setPageNumber} />)}
                                    <button onClick={nextPage} disabled={isPreviousData || pageNumber === users.total_pages}>&gt;&gt;</button>
                                </nav>

                                {isFetching && <span className="loading">Loading...</span>}
                                {content}


                            </section>
                        )
            }
        </main>
    );
}
