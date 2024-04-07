import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./DailyEight.css";
import Question from '../components/Question';
import logo_orange from "../images/Opinion8_Logo-OrangeOutline-WhiteFill_NS.svg";
import Q1Image from "../images/Q1-image.png";
import Q2Image from "../images/Q2-image.png";
// Import other question images as needed

function DailyEight() {
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
    navigate('/profile', { state: { eightCompleted: true } });
  };

  const questions = [
    {
      text: "Rishi Sunak wants to make maths lessons mandatory until age 18. Do you think this is a good idea?",
      options: ["Not at all", "Not particularly", "I don't feel strongly either way", "Sort of", "Absolutely"],
    },
    {
      text: "This would be part of a new qualification called the “Advanced British Standard”, which Sunak wants to replace A-levels with. As part of this, students would study more than three subjects for increased breadth. Would you like to do this instead of doing three A-levels?",
      options: ["Not at all", "Not particularly", "I don’t feel strongly either way", "Sort of", "Absolutely"],
    },
    {
      text: "Sticking with the Conservative party theme, Tory MP William Wragg has apologised and admitted to having leaked several MPs numbers to a man on Grindr, though says he was “manipulated” after having already sent compromising images to the man in question. Do you think that William Wragg should resign?",
      options: ["No", "Yes"],
    },
    {
      text: "If a general election was called tomorrow, which party would you vote for?",
      options: ["Conservatives", "Labour", "Liberal Democrats", "Scottish National Party", "Plaid Cymru", "Green", "An independent politician", "I wouldn’t vote"],
    },
    {
      text: "Climate activist Greta Thunberg has been arrested by Dutch police in The Hague, where protesters had planned to block The Hague's busy A12 highway for what Extinction Rebellion organisers say was the 37th time. Do you support Greta Thunberg’s campaign method?",
      options: ["Not at all", "Not particularly", "I don’t feel strongly either way", "Sort of", "Absolutely"],
    },
    {
      text: "Following on from that - how much do you agree with this statement? “Climate change is a crisis that we must prioritize tackling immediately.”",
      options: ["Not at all", "Not particularly", "I don’t feel strongly either way", "Sort of", "Absolutely"],
    },
    {
      text: "These are the top 5 songs in the UK charts at the moment. Which is your favorite?",
      options: ["Texas Hold ‘Em by Beyonce", "Beautiful Things by Benson Boone", "Lose Control by Teddy Swims", "Too Sweet by Hozier", "We can’t be friends by Ariana Grande", "I haven't heard them", "I dislike all of them"],
    },
    {
      text: "Saving the most important ‘til last! Thinking about scones that come with jam and clotted cream, in which order do you think they should be added to the scone?",
      options: ["Jam first, with cream on top", "Cream first, with jam on top", "I have no preference…"],
    }
  ];
  const currentQuestion = questions[currentQuestionIndex];
  const backgroundImageClass = `question-image-section question-image-section-${currentQuestionIndex + 1}`;

  return (
    <div className="dailyeight-body">
        <div className={backgroundImageClass}>
        <img src={logo_orange} alt="Opinion8" className="logo dailyeight-logo"/>
        <h2>Today's eight.</h2>
      </div>
      <div className="question-wrapper">
        <Question
          current_number={currentQuestionIndex + 1}
          total_number={8}
          text={currentQuestion.text}
          options={currentQuestion.options}
          onAnswer={(answer) => handleAnswer(currentQuestion.text, answer)}
        />
        {currentQuestionIndex > 0 && (
          <button onClick={handlePrev}>Previous</button>
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

export default DailyEight;
