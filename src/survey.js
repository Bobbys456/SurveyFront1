import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './index.css';
import './survey.css';



export default function Page(props) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    let questions = props.questions; 
    

    
    
    return (
        <div id="box">
          
          <div class='banner'>
            <h1>Survey</h1>
          </div>

          <div id='sQuestionContainer' class='sQuestionContainer'>
            {questions.map(function writeq(question,index){
              if(Array.isArray(question)){
                return <MCQuestion q={question} key={"q"+index} id={"q"+index}></MCQuestion>
              } else { 
                return <TextQuestion q={question} name={'q' + index} key={"q"+index} id={"q"+index}></TextQuestion>
              }
              
            })}
            <Button onClick={()=>props.submitClick(getAnswers())} id='sendSurvey' variant="contained">submit</Button>

          </div>
        
        </div>
      )

}

//returns all question answers as an array 
function getAnswers(){
  const ans = Array(document.getElementById("sQuestionContainer").childElementCount)
  let checked = 'null'; 
  for (let i = 0; i < document.getElementById("sQuestionContainer").childElementCount -1; i++) {
   
    const ele = document.getElementById('q' + i); 
    

    if(ele.getAttribute('type') === 'text'){
      
      ans[i] = ele.value
   
    }
    else if(ele.getAttribute('type') === 'radio'){
      
      checked = 'null'; 
      document.getElementsByName('q' + i).forEach((a) => {
        if(a.checked){
          checked = a.value
          
        }
      })
      
      ans[i] = checked; 

    }
  }
  
  return ans;
}


function MCQuestion(props){
  return(
    <div class='padder'>
      <div class='sQuestionOutline'>
        {props.q}
        {props.id}

        {props.q.map((question,index) => (
            <div className="form-group form-inline">
              <input type="radio" class='radio' key={index} id={props.id} name={props.id} value={props.q[index]}></input>
              <label class='lab' for={props.q[index]}>{props.q[index]}</label>
            </div>
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
        {props.id}
        <input class='texAnswer' placeholder="Enter your response here" id={props.id} type= "text"></input>
      </div>
    </div>
  )
}