import React, { useState } from 'react';
import "./Question.css";

function Question({ number, text, options, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="question">
      <h5 className="question-number">{number} of 8</h5>
      <h4>{text}</h4>
      <form>
        {options.map((option, index) => (
          <div key={index} className="option-container">
            <input
              type="radio"
              id={`option-${index}`}
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Question;