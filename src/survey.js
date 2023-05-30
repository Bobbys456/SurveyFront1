import React, { useState } from 'react';
import './index.css';
import './survey.css';

export default function Page() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    const questions = [
      '1',
      '2',
      '3',
      '4',
      'Would you recommend our service to others?',
      'What features would you like to see in future updates?',
      'How would you rate the overall user experience?',
      'Would you recommend our service to others?',
      'What features would you like to see in future updates?',
      'How would you rate the overall user experience?',
      'Would you recommend our service to others?',
      'What features would you like to see in future updates?',
      'How would you rate the overall user experience?',
      'Would you recommend our service to others?',
      'What features would you like to see in future updates?',
      'How would you rate the overall user experience?',
      'Would you recommend our service to others?',
      'What features would you like to see in future updates?',
      'How would you rate the overall user experience?',
      'Would you recommend our service to others?',
      'What features would you like to see in future updates?',
      'How would you rate the overall user experience?',
      'Would you recommend our service to others?',
      'What features would you like to see in future updates?',
      'How would you rate the overall user experience?',
      'Would you recommend our service to others?',
      'What features would you like to see in future updates?',
      'How would you rate the overall user experience?',
      'Would you recommend our service to others?',
      'What features would you like to see in future updates?',
      'How would you rate the overall user experience?',
      'Would you recommend our service to others?',
      'What features would you like to see in future updates?',
      'How would you rate the overall user experience?',
      'Would you recommend our service to others?',
      'What features would you like to see in future updates?',
      'How would you rate the overall user experience?',
      'last q \n bruh <br>sdkjfskadjf'
    ];
    
    
    return (
        <div id="box">
          
          // Spacer
          <h2></h2>

          <div class='sQuestionContainer'>
            {questions.map((question,index) => (
            <Question q={question} id={"q"+index}></Question>
            ))}
          </div>
        
        </div>
      )

}

function Question(props){
  return(
    <div class='padder'>
      <div class='sQuestionOutline'>
        {props.q}
        {"    " + props.id}
        <input class='texAnswer' id={props.id} type= "text"></input>
      </div>
    </div>
  )
}