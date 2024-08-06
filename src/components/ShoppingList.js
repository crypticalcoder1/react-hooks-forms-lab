import React, { useState } from 'react';
import Item from './Item';
import Filter from './Filter';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  const itemsToDisplay = items
    .filter(item => {
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      if (search && !item.name.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
      return true;
    });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <Filter search={search} onSearchChange={handleSearchChange} />
        <select name="filter" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

