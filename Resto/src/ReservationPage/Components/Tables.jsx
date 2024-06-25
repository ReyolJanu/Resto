import React from 'react'
import '/src/ReservationPage/Css/tables.css';
import tablelay from '/src/ReservationPage/Images/restaurant1.png';
//import MediumTable from './TableTypes/MediumTable';
//import RoundTable from './TableTypes/RoundTable';
//import PartyTable from './TableTypes/PartyTable';
import CoupleTable from './TableTypes/CoupleTable';

 
 function Table() {
   return (
     <div>
     {/* <img src={tablelay} alt="Restaurant" id="tlayout"/> */}
     <CoupleTable/>
     <CoupleTable/> 
     <CoupleTable/>


     </div>
   )
 }
 
 export default Table
 