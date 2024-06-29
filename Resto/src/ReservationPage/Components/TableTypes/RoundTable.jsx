import * as React from 'react';
import { useState } from "react";
import './table.css';


export default function RoundTable({tablename}) {
  const [color, setColor] = useState("brown");
  const [hover, setHover] = useState(false);
  
  const buttonStyle = {
    position:'absolute',
    backgroundColor: color,
    top: '12%',
    left: '12%',
    border: '2px solid',
    color: 'white', 
    width: '100px',
    height: '100px',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '100px',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    transform: hover ? 'scale(1.1)' : 'scale(1)',
    
     
    
    
  };
    
  return (
  
  <div class="all">
    <div class="circle-container">
    
    <button style={buttonStyle} onClick={() => setColor("blue")} onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)} > {tablename} </button>
    <div class="square square1"></div>
    <div class="square square2"></div>
    <div class="square square3"></div>
    <div class="square square4"></div>
    <div class="square square5"></div>
    <div class="square square6"></div>
    <div class="square square7"></div>
    <div class="square square8"></div>
  </div>
    
    
          
      </div>
      
  );
}

