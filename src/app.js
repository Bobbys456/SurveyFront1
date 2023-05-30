
import React, { useEffect, useState } from "react";
import './index.css';
import LoginPage from './login.js';
import SurveyPage from './survey';
import axios from 'axios';



export default function MyApp() {

  const [verified, setVerify] = useState(false);
  const [valid, setValid] = useState(true);
  const [error, setError] = useState(null);

  if(!verified){
    return (
      <>
        <LoginPage error={error} valid={valid} verified={verified} loginClick={loginClick}></LoginPage>
      </>
      
   
    );
  } else {
    return (
    
      <SurveyPage></SurveyPage>

   
    );
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
  function loginClick(emailInput){

    const emailValue = emailInput.value;
    
    

    if(emailValue.indexOf('@') < 0 || emailValue.indexOf('.') < 0 || emailValue.indexOf(' ') >= 0){
    
      logError('Not a valid email address.')
    
    }else{

      axios.get('http://localhost:5000/', {
          params: {
            email: emailValue
          }
          }
      ).then((response)=>{
        
        if(response.data === false){
            logError('This email has already been used.'); 
        }else{
            validate(); 
        }
        console.log(response.data);
      
      }).catch(function (error) {
        console.log(error);
      })
 
    }  
  }
}
