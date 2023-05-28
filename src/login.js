import Button from '@mui/material/Button';
import './index.css';
import axios from 'axios';
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

    //this error methods sets the state to inclue error
    function error(i){
        this.setState({
        valid: false,
        error: i
        })
    }

    validate(){
        
    }

    //handler method ofr when the verify email button is clicked. Makes sure email syntax is correct on client and check emails for double use at the server
    buttonClickTest() {

        const emailInput = document.getElementById('email');
        const emailValue = emailInput.value;
        
        

        if(emailValue.indexOf('@') < 0 || emailValue.indexOf(' ') >= 0){
        
        this.error('Invalid email. Must have \'@\' and cannot have any spaces.')
        }
        else{

        axios.get('http://localhost:5000/', {
            params: {
            email: emailValue
            }
        })
        .then((response)=>{
            if(response.data === false){
            this.error('This email has already been used.'); 
            }else{
            this.validate(); 
            }
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });  
        }

        

        

    }


    //render method for loginPage  
    render(){

        return (
        <div id="box">
            <input class={this.state.valid ? 'true' : 'false'} id='email' type= "email"></input>
        
            <NewBut 
            onclick={()=>this.buttonClickTest()}>  
            </NewBut>
            {this.status()}
        
        </div>
        )
        }

    }


export default LoginPage; 
  
  
  