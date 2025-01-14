import React, { useState, useEffect } from 'react';
import Loading from './loading';
import { FaAngleDoubleRight } from 'react-icons/fa';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(1);

  const fetchJobs = async () => {
    const reponse = await fetch(url);
    const newJobs = await reponse.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className='section'>
      <div className='title'>
        <h2>Experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* btn container */}
        <div className='btn-container'>
          {jobs.map((job, index) => (
            <button
              key={job.id}
              className={`job-btn ${index === value && 'active-btn '}`}
              onClick={() => setValue(index)}
            >
              {job.company}
            </button>
          ))}
        </div>
        {/* job info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty) => (
            <div className='job-desc'>
              <FaAngleDoubleRight className='job-icon' />
              <p>{duties}</p>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}

export default App;
