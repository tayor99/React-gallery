import React from 'react';
import '../Styles/searchbar.css';

function SearchBar({ text, handleChange }) {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="search-input"
          value={text}
          onChange={handleChange}
          placeholder="Search Favourite anime"
        />
        <button onClick={submitHandler} className="searchButton">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
