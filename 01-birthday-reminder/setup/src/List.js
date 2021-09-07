import React from 'react';

const List = ({ pep }) => {
  console.log(pep.name);
  return (
    <article className='person'>
      <img src={pep.image} alt={pep.name} />
      <div>
        <h4>{pep.name}</h4>
        <p>{pep.age} years</p>
      </div>
    </article>
  );
};

export default List;
