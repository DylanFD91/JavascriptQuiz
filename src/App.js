import React, { useState } from 'react';

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect === true){
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    }
    else {
      setShowScore(true);
    }
  };

	const questions = [
		{
			questionText: 'Which of these is a fire type?',
			answerOptions: [
				{ answerText: 'Bulbasaur', isCorrect: false },
				{ answerText: 'Greninja', isCorrect: false },
				{ answerText: 'Charizard', isCorrect: true },
				{ answerText: 'Salamance', isCorrect: false },
			],
		},
		{
			questionText: 'Which of these were the first pokemon games?',
			answerOptions: [
				{ answerText: 'Pokemon Ruby', isCorrect: false },
				{ answerText: 'Pokemon Red', isCorrect: true },
				{ answerText: 'Pokemon Sun', isCorrect: false },
				{ answerText: 'Pokemon X', isCorrect: false },
			],
		},
		{
			questionText: 'Which of these is a water type pokemon?',
			answerOptions: [
				{ answerText: 'Squirtle', isCorrect: true },
				{ answerText: 'Bellsprout', isCorrect: false },
				{ answerText: 'Groudon', isCorrect: false },
				{ answerText: 'Yvetal', isCorrect: false },
			],
		},
		{
			questionText: 'Who is Pikachus partner',
			answerOptions: [
				{ answerText: 'Red', isCorrect: false },
				{ answerText: 'Blue', isCorrect: false },
				{ answerText: 'Misty', isCorrect: false },
				{ answerText: 'Ash', isCorrect: true },
			],
		},
	];

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion +  1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map(
              (answerOption) => 
                <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
              )
            }
					</div>
				</>
			)}
		</div>
	);
}
