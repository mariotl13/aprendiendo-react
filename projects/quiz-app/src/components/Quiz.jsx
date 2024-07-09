import { useCallback, useState } from "react";
import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from "./QuestionTimer.jsx";


const TIMEOUT = 5000;

export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers(currentAnswers => [...currentAnswers, selectedAnswer]);
    }

    const handleSkipAnswer = useCallback(function handleSkipAnswer() {
        handleSelectAnswer(null)
    }, [])

    if (quizIsComplete) {
        return (<div id="summary">
            <img src={quizCompleteImg} alt="Quiz complete image" />
            <h2>Quiz completed!</h2>
        </div>)
    }

    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex]?.answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map(answer => (
                        <li key={answer} className="answer">
                            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
                <QuestionTimer key={activeQuestionIndex} timeout={TIMEOUT} onTimeout={handleSkipAnswer}></QuestionTimer>
            </div>
        </div>
    )
}