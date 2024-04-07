import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./DailyEight.css";
import Question from '../components/Question';
import logo_orange from "../images/Opinion8_Logo-Orange_NS.svg";


function WelcomeQuestions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate(); 

  const handleAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrev = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleSubmit = () => {
    console.log(answers);
    navigate('/profile', { state: { eightCompleted: false } });
  };

  const questions = [
    {
      text: "How old are you?",
      options: ["13-14", "15-16", "16-17", "18+"],
    },
    {
      text: "What is your gender?",
      options: ["Male", "Female", "Other", "Prefer not to answer"],
    },
    {
      text: "Which region do you live in?",
      options: ["South West", "South East", "Greater London", "East of England", "West Midlands", "East Midlands", "Yorkshire and Humber", "North West", "North East"],
    }
  ];
  

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="dailyeight-body">
      <img src={logo_orange} alt="Opinion8" className="logo dailyeight-logo"/>
      <h2>About you.</h2>
        <div>
          <Question
            current_number = {currentQuestionIndex + 1}
            total_number = {3}
            text={currentQuestion.text}
            options={currentQuestion.options}
            onAnswer={(answer) => handleAnswer(currentQuestion.text, answer)}
          />
          {currentQuestionIndex > 0 && (
            <button onClick={handlePrev} className="btn_white_white_text">Previous</button>
          )}
          {currentQuestionIndex < questions.length - 1 && (
            <button onClick={handleNext} className="btn_orange_white_text">Next</button>
          )}
          {currentQuestionIndex === questions.length - 1 && (
            <button onClick={handleSubmit} className="btn_orange_white_text">Finish</button>
          )}
        </div>
    </div>
  );
}

export default WelcomeQuestions;
