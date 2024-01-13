import React, { useState } from 'react';
import './Question.module.css';
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div class="container">
    <article className='question'>
      <header>
        <i><h4>{title}</h4></i>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? "-" : "+"}
        </button>
      </header>
      {showInfo && <i><p>{info}</p></i>}
    </article>
    </div>
  );
};

export default Question;