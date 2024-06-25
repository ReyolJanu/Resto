import * as React from 'react';
import { useState } from "react";
import './table.css';


export default function CoupleTable({initcolor}) {
  const [color, setColor] = useState("red");
  const buttonStyle = {
   
    backgroundColor: color,
    color: 'white', // Ensures text color is white for better contrast
    border: 'none',
    padding: '15px 39px',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '5px',
  };
    
  return (
  
  <div>
        <div class="chairup" >
          <div></div>
          <div></div>
          <div></div>
        </div>
    
      <button style={buttonStyle} onClick={() => setColor("blue")}  > Table 1 </button>
      <div class="chairdown" >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      
  );
}

