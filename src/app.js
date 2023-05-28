import * as React from 'react';
import './index.css';
import LoginPage from './login.js';
import SurveyPage from './survey';

export default function MyApp() {

  const [verified, setVerify] = useState(false);
  const [valid, setValid] = useState(true);
  const [error, setError] = useState(null);

  if(!verified){
    return (
    
      <LoginPage error={error} valid={valid} verified={verified}></LoginPage>
   
  );
  } else {
    return (
    
      <SurveyPage></SurveyPage>

   
  );
  }
  
}
