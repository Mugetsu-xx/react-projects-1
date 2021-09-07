import React, { useState } from 'react';

const Tour = ({ id, name, price, info, image, removeTours }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt='' />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}`}{' '}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button onClick={() => removeTours(id)} className='delete-btn'>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
