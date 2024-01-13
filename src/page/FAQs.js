import React, { useState } from 'react';
import data from '../component/QuestionData';
import SingleQuestion from '../component/Question';
import '../component/Question.module.css';
function FAQs() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <i><h1 style={{fontSize:'35px'}}>questions and answers about login</h1></i>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default FAQs;