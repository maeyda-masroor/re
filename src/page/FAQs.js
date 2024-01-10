import React, { useState } from 'react';
import data from '../component/QuestionData';
import SingleQuestion from '../component/Question';
import '../component/Question.module.css';
function FAQs() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
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