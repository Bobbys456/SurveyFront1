
import React, { useEffect, useState } from "react";
import './index.css';
import LoginPage from './login.js';
import SurveyPage from './survey';
import axios from 'axios';
import Loading from './loading'; 


let questionSet;
let questions; 
let response;  

export default function MyApp() {

  
  let email = null; 
  const [verified, setVerify] = useState(false);
  const [valid, setValid] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  if(loading)
  {
    return(
      <Loading></Loading>
    )
  }else{
    if(!verified){

      return (

        <LoginPage error={error} valid={valid} verified={verified} loginClick={loginClick}></LoginPage>

      );
    } 
    else{
    
      return( 
        <SurveyPage questions={questionSet} submitClick={submitClick}></SurveyPage>
      )

    }
  }
  
  

  //gets questions for survey from the server 
  async function questionReq(){
      
    response = await axios.get('http://localhost:5000/questions');
    questions = Object.values(response.data); 
    questionSet = questions; 
    setLoading(false)

  }

  //handles sumbition of form
  async function submitClick(submission){

    let response = await axios.get('http://localhost:5000/submit', {
        params: {
          data: submission,
          email: email
        }
        })
  }  
  

  
 //this error methods sets the state to inclue error
  function logError(i){
    setError(i);
    setValid(false);
  }

  //if email is valid and verified allows user to access survey page 
  function validate(){
    setVerify(true)
  }

  //handler method ofr when the verify email button is clicked. Makes sure email syntax is correct on client and check emails for double use at the server
  async function loginClick(emailInput){

    let emailValue = emailInput.value;
    

    if(emailValue.indexOf('@') < 0 || emailValue.indexOf('.') < 0 || emailValue.indexOf(' ') >= 0){
    
      logError('Not a valid email address.')
    
    }else{

      response = await axios.get('http://localhost:5000/', {
          params: {
            email: emailValue
          }
          }
      )
        
      if(response.data === false){
          logError('This email has already been used.'); 
      }else{
          validate(); 
          email = emailValue; 
      }
      
      setLoading(true)
      questionReq()

    }  
  }
}
