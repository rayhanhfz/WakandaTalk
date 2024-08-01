import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      setError('Search query cannot be empty.');
      return;
    }
    setError('');
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 search-bar">
      <div className="input-group">
        <input 
          type="text" 
          className="form-control search-input" 
          placeholder="Search for news..." 
          value={query} 
          onChange={handleInputChange} 
        />
        <div className="input-group-append">
          <button className="btn btn-primary search-button" type="submit">Search</button>
        </div>
      </div>
      {error && <div className="text-danger">{error}</div>}
    </form>
  );
}

export default SearchBar;
