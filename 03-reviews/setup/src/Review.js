import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    return number;
  };

  const randomPeople = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = (index + 1) % people.length;
      return newIndex;
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = (index - 1) % people.length;
      if (newIndex < 0) {
        console.log(people.length);
        return people.length - 1;
      } else {
        return newIndex;
      }
    });
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={image} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
      </div>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPeople}>
        Suprise Me
      </button>
    </article>
  );
};

export default Review;
