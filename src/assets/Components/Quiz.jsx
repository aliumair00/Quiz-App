import React, { useState } from 'react';
import quizData from '/src/assets/quiz.js';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleNextQuestion = (question) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = {
      question: question.question,
      answer: selectedQuestion,
    };
    setAnswers(updatedAnswers);

    if (question.correct === selectedQuestion || question.skip) {
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setIsFinished(true);
      }
    } else {
      if(question.skip){
        if (currentQuestion < quizData.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setIsFinished(true);
        }
      }else{
        if(question.next){
          setCurrentQuestion(question.next-1);
        }else{
          setIsFinished(true)
        }
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedQuestion("");
    setAnswers([]);
    setIsFinished(false);
  };

  return (
    <div className='Quiz'>
      {!isFinished ? (
        <div className='container border-4 border-[#011b39] flex flex-col items-center gap-4 md:gap-6 lg:gap-8 flex-wrap h-auto max-w-md mx-auto p-4 mt-6 rounded-md'>
          <div className='startNow mt-6 mb-4 text-xl md:text-2xl lg:text-3xl font-bold text-[#011b39] flex items-center justify-center'>
            <h1>Start Now!</h1>
          </div>
          <div className='inner pt-8 md:pt-12 lg:pt-16'>
            <h1 className='text-sm md:text-lg lg:text-xl font-semibold'>Question {quizData[currentQuestion].id}</h1>
            <p className='mb-4 text-base md:text-lg lg:text-xl font-semibold'>{quizData[currentQuestion].question}</p>
            <ul className='w-full'>
              {quizData[currentQuestion].options.map((option, index) => (
                <li className='flex items-center gap-2 md:gap-4 text-sm md:text-base lg:text-lg' key={index}>
                  <input
                    className='form-radio'
                    type='radio'
                    name='option'
                    value={option}
                    onChange={() => setSelectedQuestion(option)}
                  />
                  <span>{option}</span>
                </li>
              ))}
            </ul>
            <div className='btn mt-4 md:mt-6 lg:mt-8 flex flex-col md:flex-row gap-4'>
              {currentQuestion !== 0 && (
                <button
                  className='px-4 py-2 bg-red-600 rounded-md text-white'
                  onClick={() => {
                    if (answers.length > 0 && quizData[currentQuestion - 1].skip === true) {
                      setCurrentQuestion(currentQuestion - 2);
                    } else {
                      setCurrentQuestion(currentQuestion - 1);
                    }
                  }}
                >
                  Previous
                </button>
              )}
              <button
                className='px-4 py-2 bg-green-500 rounded-md text-white'
                onClick={() => handleNextQuestion(quizData[currentQuestion])}
              >
                {currentQuestion < quizData.length - 1 ? "Next" : "Finish"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='thanku border-4 border-[#011b39] flex flex-col items-center gap-4 md:gap-6 lg:gap-8 flex-wrap h-auto max-w-md mx-auto p-4 mt-6 rounded-md'>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-bold mt-6'>Thank YOU</h1>
          <ul className='w-full mt-4'>
            {answers.map((answer, index) => (
              <li key={index} className='mb-2'>
                <p className='font-semibold'>{answer.question}</p>
                <p>{answer.answer}</p>
              </li>
            ))}
          </ul>
          <button
            className='px-4 py-2 bg-blue-500 rounded-md text-white mt-4'
            onClick={handleRestart}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
