import React from "react";
import "./NextQuestionButton.css";

function NextQuestionButton({x}){
    return (
        <button onClick={x} className="quizNextQuestionButton">Dalej</button>
    );
}

export { NextQuestionButton };