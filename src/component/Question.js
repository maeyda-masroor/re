import React, { useState } from 'react';
import './Question.module.css';
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div class="container">
    <article className='question'>
      <header>
        <h4 style={{fontFamily:'Serif'}}>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? "-" : "+"}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
    </div>
  );
};

export default Question;