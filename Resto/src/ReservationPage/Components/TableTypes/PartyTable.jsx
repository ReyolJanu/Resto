import * as React from 'react';
import { useState } from "react";
import './table.css';


export default function MediumTable({tablename}) {
  const [color, setColor] = useState("red");
  const [hover, setHover] = useState(false);
  
  const buttonStyle = {
   
    backgroundColor: color,
    border: '2px solid',
    color: 'white', 
    width: '265px',
    height: '60px',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '1px',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    transform: hover ? 'scale(1.1)' : 'scale(1)',
   
     
    
    
  };
    
  return (
  
  <div class="all">
        <div class="chairup" >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    
     <div> <button style={buttonStyle} onClick={() => setColor("blue")} onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)} > {tablename} </button></div>
      <div class="chairdown" >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      
  );
}

