import React from 'react';

function Filter({ search, onSearchChange }) {
  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search"
        value={search}  // Controlled input value from props
        onChange={onSearchChange}  // Event handler for input change
      />
    </div>
  );
}

export default Filter;
