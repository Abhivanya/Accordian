import React, { useState } from "react";
import "./Question.css";

const Question = ({ question, selectedValue, onAnswerChange }) => {
  return (
    <>
      <div className="question">
        <p>{question.question}</p>
        <div className="options">
          <div>
            <input
              type="radio"
              name={question.question}
              value={question.option1}
              checked={selectedValue == question.option1}
              onChange={() => onAnswerChange(question.option1)}
            />
            {question.option1}
          </div>
          <div>
            <input
              name={question.question}
              type="radio"
              value={question.option2}
              checked={selectedValue == question.option2}
              onChange={() => onAnswerChange(question.option2)}
            />
            {question.option2}
          </div>
          <div>
            <input
              name={question.question}
              type="radio"
              value={question.option3}
              checked={selectedValue == question.option3}
              onChange={() => onAnswerChange(question.option3)}
            />
            {question.option3}
          </div>
        </div>
      </div>
    </>
  );
};

export default Question;
