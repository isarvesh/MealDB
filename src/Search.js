import React, { useState } from 'react';

function Search({ searchMeal }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMeal(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search for a meal..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
