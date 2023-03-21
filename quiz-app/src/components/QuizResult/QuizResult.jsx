import React from "react";
import "./QuizResult.css";

function QuizResult({score, maxScore}){
    return (
        <div className="quizContainer">
            <span className="quizHeader">Wynik: {score} / {maxScore}</span>
        </div>
    );
}

export { QuizResult };