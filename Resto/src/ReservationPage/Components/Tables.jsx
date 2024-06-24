import React from 'react'
import BasicButton from './BasicButton'
import './tables.css';
import tablelay from '/src/ReservationPage/Images/restaurant1.png';
 
 function Table() {
   return (
     <div>
     <img src={tablelay} alt="Restaurant" id="tlayout"/>
    <button id="btn1">Table1</button>
    <button id="btn2">Table2</button>
    <button id="btn3">Table3</button>
    <button id="btn4">Table4</button>
     </div>
   )
 }
 
 export default Table
 