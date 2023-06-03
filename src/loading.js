import CircularProgress from '@mui/material/CircularProgress';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './index.css';
import './survey.css';




export default function Loading(props) {

    return(
        <div id='box'>
            <CircularProgress class='spinner'/>
        </div>
    )
}