import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faCar, faPeopleGroup, faComment } from '@fortawesome/free-solid-svg-icons';


const Summary = () => {
    const flagFont=<FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>
    const carFont=<FontAwesomeIcon icon={faCar} />
    const peopleFont=<FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>
    const commentFont=<FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
    return (
        <div className='bg-menu1 py-10'><h2 className='text-4xl font-bold px-auto'>Business Summary</h2><br />
            <div class="stats stats-vertical lg:stats-horizontal shadow">
  
  <div class="stat text-3xl bg-orange-800">
    <div class="stat-title">Countries</div>
    <span className=''>{flagFont}</span>
    <div class="stat-value">77+</div>
    <div class="stat-desc">Jan 1st 2016- Feb 1st 2022</div>
  </div>
  
  <div class="stat text-3xl bg-orange-800">
    <div class="stat-title">Completed Projects</div>
    <span className=''>{carFont}</span>
    <div class="stat-value">535+</div>
    <div class="stat-desc">Jan 1st 2017- Feb 1st 2022</div>
  </div>
  
  <div class="stat text-3xl bg-orange-800">
    <div class="stat-title">Happy Clients</div>
    <span className=''>{peopleFont}</span>
    <div class="stat-value">12k+</div>
    <div class="stat-desc">Jan 1st 2016- Feb 1st 2022</div>
  </div>

  <div class="stat text-3xl bg-orange-800">
    <div class="stat-title">Feedback</div>
    <span className=''>{commentFont}</span>
    <div class="stat-value">7k+</div>
    <div class="stat-desc">Jan 1st 2016- Feb 1st 2022</div>
  </div>
  
</div>
</div>
    );
};

export default Summary;