import React from 'react';

const Categories = ({ filterCategory, filterItems }) => {
  return (
    <div className='btn-container'>
      {filterCategory.map((category, index) => (
        <button
          className='filter-btn'
          key={index}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
      {/* <button className='filter-btn' onClick={() => filterItems('all')}>
        All
      </button>
      <button className='filter-btn' onClick={() => filterItems('breakfast')}>
        Breakfast
      </button>
      <button className='filter-btn' onClick={() => filterItems('lunch')}>
        Lunch
      </button>
      <button className='filter-btn' onClick={() => filterItems('shakes')}>
        Shakes
      </button> */}
    </div>
  );
};

export default Categories;
