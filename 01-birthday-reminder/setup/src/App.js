import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);

  console.log(people);
  const ButtonEventHandler = () => {
    console.log('clicked');
    setPeople([]);
  };

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        {people.map((pep) => (
          <List pep={pep} key={pep.id} />
        ))}

        <button onClick={ButtonEventHandler}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
