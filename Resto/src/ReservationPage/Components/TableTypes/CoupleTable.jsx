import * as React from 'react';
import { useState } from "react";
import './table.css';


export default function MediumTable({tablename}) {
  const [color, setColor] = useState("brown");
  const [hover, setHover] = useState(false);
  
  const buttonStyle = {
   
    backgroundColor: color,
    border: '2px solid',
    color: 'white', 
    width: '70px',
    height: '40px',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '20px',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    transform: hover ? 'scale(1.1)' : 'scale(1)',
   
     
    
    
  };
    
  return (
  
  <div class="all-couple">
        <div class="chairup-c" >
          <div></div>
          
        </div>
    
     <div> <button style={buttonStyle} onClick={() => setColor("blue")} onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)} > {tablename} </button></div>
      <div class="chairdown-c" >
          <div></div>
          
        </div>
      </div>
      
  );
}

