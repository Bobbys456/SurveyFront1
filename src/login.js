import Button from '@mui/material/Button';
import './index.css';

import React from 'react';


//new button that on click starts http request 
function NewBut(props){

    return (
      <Button onClick={props.onclick} id='button' variant="contained">Verify</Button>
    )
    
  }



//container class for everything else, loads enitre page
function LoginPage (props){

    //allows for error message to bve printed if any exist for inputted email 
    function status() { 
        if(props.error != null){
        return (
            <p class='err'>{props.error}</p>
        )
        }
    }

   
    
    
    return (
        <div id="box">
            <input class={props.valid ? 'true' : 'false'} id='email' type= "email"></input>
        
            <NewBut 
                onclick={()=>props.loginClick(document.getElementById('email'))}>  
            </NewBut>
            {status()}
        
        </div>
    )
        

}


export default LoginPage; 
  
  
  