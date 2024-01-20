import React, { useState } from 'react';
import data from '../component/QuestionData';
import SingleQuestion from '../component/Question';
import '../component/Question.module.css';
function FAQs() {
  const [questions, setQuestions] = useState(data);
  return (
      <div className='container'>
        <i><h1 style={{fontSize:'35px'}}>FAQ's to Answer Frequent Questions</h1></i>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
  );
}

export default FAQs;