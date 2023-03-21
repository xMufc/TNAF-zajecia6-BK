import React from "react";
import "./QuestionOption.css";

function QuestionOption({answer, checkAnswer, showResult, correct, drawAnswer}){
    
    let buttonClassName = "questionOptionButton";

    
    if(drawAnswer){
        
        if(correct){
            buttonClassName += " correct";
        }
        else{
            buttonClassName += " wrong";
        }
    }

    return (
        <button onClick={checkAnswer} 
        className={buttonClassName} 
        id={answer.id}>{answer.answer}</button>
    );
}

export { QuestionOption };