import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './index.css';
import './survey.css';

const questions = [
  '1',
  '2',
  '3',
  '4',
  ['a','b','c','d'],
  ['a','f','c','d'],
  ['a','b','g','d'],
  ['p','b','c','d'],
];

const mcquestions = [
  
];

export default function Page(props) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    
    
    
    return (
        <div id="box">
          
          <div class='banner'>
            <h1>Survey</h1>
          </div>

          <div id='sQuestionContainer' class='sQuestionContainer'>
            {questions.map(function writeq(question,index){
              if(index > 3){
                return <MCQuestion q={question} key={index} id={"q"+index}></MCQuestion>
              } else { 
                return <TextQuestion q={question} key={index} id={"q"+index}></TextQuestion>
              }
              
            })}
              
            
            
            
           
            
            <Button onClick={()=>props.submitClick(getAnswers())} id='button' variant="contained">submit</Button>
          </div>
        
        </div>
      )

}

//returns all question answers as an array 
function getAnswers(){
  const ans = Array(document.getElementById("sQuestionContainer").childElementCount)
  for (let i = 0; i < document.getElementById("sQuestionContainer").childElementCount -1; i++) {
   
    
    ans[i] = document.getElementById('q' + i).value
    
    
    console.log('loop succ')
   
  }
  
  return ans;
}


//temp holding for if else answer retrieval 
/*
function getAnswers(){
  const ans = Array(document.getElementById("sQuestionContainer").childElementCount)
  for (let i = 0; i < document.getElementById("sQuestionContainer").childElementCount; i++) {
    if(document.getElementById('q' + i).tagName.type === 'text'){
      ans[i] = document.getElementById('q' + i).value
    }
    if(document.getElementById('q' + i).tagName.type === 'radio'){
      ans[i] = document.getElementById('q' + i).value
    }

  }
  
  return ans;
}
*/

function MCQuestion(props){
  return(
    <div class='padder'>
      <div class='sQuestionOutline'>
        {props.q}
        {"    " + props.id}

        {props.q.map((question,index) => (
            <><input type="radio" key={index} id={props.id} name={props.id} value={props.q[index]}></input><label class='lab' for={props.q[index]}>{props.q[index]}</label></>
            ))
        }
     
        
        
        
      </div>
    </div>
  )
}

function TextQuestion(props){
  return(
    <div class='padder'>
      <div class='sQuestionOutline'>
        {props.q}
        {"    " + props.id}
        <input class='texAnswer' placeholder="Enter your response here" id={props.id} type= "text"></input>
      </div>
    </div>
  )
}