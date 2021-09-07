import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTours }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour removeTours={removeTours} key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
