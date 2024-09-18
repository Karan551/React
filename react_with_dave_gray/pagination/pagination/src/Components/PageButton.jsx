import React from 'react';

export default function PageButton({ pageNumber, setPageNumber }) {
    return (
        <button onClick={() => setPageNumber(pageNumber)}>
            {pageNumber}
        </button>
    );
}
