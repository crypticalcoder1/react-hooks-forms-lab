
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import ItemForm from "./ItemForm";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode(prevMode => !prevMode);
  }

  function handleItemFormSubmit(newItem) {
    setItems(prevItems => [...prevItems, newItem]);
  }

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
