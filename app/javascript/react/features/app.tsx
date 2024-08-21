import React, { useState, useEffect } from 'react';

const questions = [
  {
    question: "2,000の場合の一匹当たりのりんごの数は？",
    correctAnswer: "500",
    alternativeAnswer1: "10",
    alternativeAnswer2: "300",
    alternativeAnswer3: "200",
    variable: "11"
  },
  {
    question: "10,000の場合の一匹当たりのりんごの数は？",
    correctAnswer: "2,500",
    alternativeAnswer1: "100",
    alternativeAnswer2: "3,000",
    alternativeAnswer3: "2,000",
    variable: "12"
  },
  {
    question: "1,000の場合の一匹当たりのりんごの数は？",
    correctAnswer: "250",
    alternativeAnswer1: "10",
    alternativeAnswer2: "300",
    alternativeAnswer3: "200",
    variable: "7"
  }
];

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const answers = [
      questions[currentQuestionIndex].correctAnswer,
      questions[currentQuestionIndex].alternativeAnswer1,
      questions[currentQuestionIndex].alternativeAnswer2,
      questions[currentQuestionIndex].alternativeAnswer3
    ];
    setShuffledAnswers(shuffleArray(answers));
  }, [currentQuestionIndex]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleAnswerClick(answer) {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setStatus("すべての質問に正解しました！");
      }
    } else {
      setStatus("不正解です。ゲームオーバー！");
    }
  }

  return (
    <div className="w-[1000px] h-[750px] flex flex-col bg-base-300 relative">
    <img src="/images/waku.png" alt="title" className="z-20 fixed top-0 left-0"/>
    <img src="/images/wood_kanban1.png" alt="title" className="z-20 absolute scale-125 top-[30px] left-1/2 transform -translate-x-1/2"/>
    {status ? (
          <div className="font-bold z-30 absolute top-[130px] left-1/2 transform -translate-x-1/2">{status}</div>
        ) : (
          <div>
            <div className="font-bold z-30 absolute top-[130px] left-1/2 transform -translate-x-1/2">{questions[currentQuestionIndex].question}</div>
          </div>
        )}
      <div className="z-10 flex-grow-0 flex-shrink-0 h-2/3 bg-gray-200">
        <img src="/images/hiru.webp" alt="title" className="object-cover"/>
      </div>
      <div className="z-20 flex-grow-0 mx-[11px] my-9 pt-6 flex-shrink-0 h-1/6 bg-base-300">
        <div className="z-30 m-2 grid grid-cols-2 gap-4 bg-base-300">
          {shuffledAnswers.map((answer, index) => (
            <div
              key={index}
              className="btn btn-lg"
              onClick={() => handleAnswerClick(answer)}
            >
              {answer}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
