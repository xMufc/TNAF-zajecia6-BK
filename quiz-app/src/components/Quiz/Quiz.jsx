import React from "react";
import { useState } from 'react';
import "./Quiz.css";
import { Question } from '../Question/Question';
import { NextQuestionButton } from '../NextQuestionButton/NextQuestionButton';
import { QuizResult } from "../QuizResult/QuizResult";

function Quiz({ questions }){
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [drawAnswer, setDrawAnswer] = useState(false);
    
	const changeQuestionNumber = () => {
        if(currentQuestion !== questions.length){
            setCurrentQuestion(currentQuestion => currentQuestion + 1);
            setShowResult(false);
            setDrawAnswer(false);
        }
        else{
            setResult(true);
        }
	};

    const updateScore = () => {
        if(!showResult){
            setScore(score => score + 1);
            console.log(score);
            setShowResult(true);
        }
    }
    const draw = () => {
        setDrawAnswer(true);
    }

    return (
        
        
        <>
            {
                result === false ? 
                <div className="quizContainer">
                    <span className="quizHeader">Pytanie {currentQuestion} / {questions.length}</span>
                    <Question question={questions[currentQuestion-1]} updateScore={updateScore} showResult={showResult}  draw = {draw} drawAnswer = {drawAnswer}/>
                    <div className="quizButtonRow">
                        <NextQuestionButton x = {changeQuestionNumber}/>
                    </div>
                </div> 
                : 
                <QuizResult score={score} maxScore={questions.length}/>
            }
            
        </>

    );
}

export { Quiz };