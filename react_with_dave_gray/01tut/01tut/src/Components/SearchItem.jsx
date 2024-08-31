import React from 'react';

const SearchItem = ({ search, setSearch, handleSearch }) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor='search'>Search</label>
      <input
        type="text"
        name="search"
        id="search"
        role='search'
        placeholder='Search Here....'
        value={search}
        onChange={(e) => (setSearch(e.target.value), handleSearch())}

      />
    </form>
  );
};

export default SearchItem

