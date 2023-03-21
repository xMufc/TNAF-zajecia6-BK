import React from "react";
import { QuestionOption } from "../QuestionOption/QuestionOption";
import "./Question.css";

function Question({ question, updateScore, showResult, draw, drawAnswer }){
    
    let setShowResult = (value) =>{
        showResult = value;
    }

    const check = (e) => {
        const id = e.target.id;
        if((id.toString() === question.correct.toString()) && !showResult){
            updateScore();
        }
        draw(true);
        setShowResult(true);
    }
    return (
        <div className="questionContainer">
            <span className="questionAnswers">{ question.text }</span>
            <div className="verticalDivider"></div>
            <div className="questionAnswers">
                {question.options.map(questionOption => <QuestionOption answer={questionOption} checkAnswer = {check} showResult={showResult} correct={question.correct === questionOption.id} drawAnswer = {drawAnswer}/>)}
            </div>
        </div>
    );
}

export { Question };