import React from 'react'
import './Quiz.css'
import { data } from '../../assets/data';


const Quiz = () => {

    let [index,setIndex] = React.useState(0);
    let [question,setQuestion] = React.useState(data[index]);
    let [answered,setAnswered] = React.useState(false);
    let [score,setScore] = React.useState(0);
    let [finished,setFinish] = React.useState(false);
    

    let one = React.useRef(null);
    let two = React.useRef(null);
    let three = React.useRef(null);
    let four = React.useRef(null);
    let answerMap = [one,two,three,four];




    const next = ()=>{
      if(index < data.length -1){
        if(answered === true){
          setIndex(++index);
          console.log(data[index]);
          setQuestion(data[index]);
          answerMap.map((selection)=>{
            selection.current.classList.remove("select");
          })
          setAnswered(false);    
        }
      }
      else{
        setFinish(true);
      }
    }

    const displayText = () => {
      if (score > 3){
        return "Great job!";
      }
      else{
        return "Keep studying!";
      }
    }

    const checkAnswer = (sel,ans) => {
      if (answered === false){
        if(question.ans === ans){
          setAnswered(true);
          setScore(prev=>prev+1);
          sel.target.classList.add("select");
          
        }
        else{
          setAnswered(true);
          sel.target.classList.add("select");
        }
      }
  }
  return (
    <>
      <h1>Quiz</h1>
        <hr/>
        <div className="quiz-app">
      {finished ? ( 
        <div className="finalScore"><h1>Final Score:</h1><h2>{score}/{data.length}</h2><h3>{displayText()}</h3></div>
      ) : (
        <>
    <div className='container'>

        <h2>{index+1}.{question.question}</h2>
        <ul>
          <li ref={one}  onClick={(sel)=>{checkAnswer(sel,1)}}>{question.option1}</li>
          <li ref={two}  onClick={(sel)=>{checkAnswer(sel,2)}}>{question.option2}</li>
          <li ref={three} onClick={(sel)=>{checkAnswer(sel,3)}}>{question.option3}</li>
          <li ref={four} onClick={(sel)=>{checkAnswer(sel,4)}}>{question.option4}</li>
        </ul>
        <button onClick={next}>Next</button>
        <div className="questionNumber"><h2>Question:</h2>{index+1} of {data.length}</div>
          
    </div>
      </>
      )}
      </div>
    </>
  );
}

export default Quiz