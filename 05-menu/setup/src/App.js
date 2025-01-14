import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const SeperatingCaterory = [
  'all',
  ...new Set(items.map((item) => item.category)),
];
console.log(SeperatingCaterory);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(SeperatingCaterory);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterCategory={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
