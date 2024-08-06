
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'; // Ensure you have uuid installed

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');

  function handleNameChange(event) {
    setItemName(event.target.value);
  }

  function handleCategoryChange(event) {
    setItemCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name: itemName,
      category: itemCategory,
    });
    setItemName('');
    setItemCategory('Produce');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={itemName}
          onChange={handleNameChange}
          aria-label="Name"
        />
      </label>
      <label>
        Category
        <select value={itemCategory} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
