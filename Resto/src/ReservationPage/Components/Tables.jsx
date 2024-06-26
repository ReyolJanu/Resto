import React from 'react'
import '/src/ReservationPage/Css/tables.css';
import tablelay from '/src/ReservationPage/Images/restaurant1.png';
import MediumTable from './TableTypes/MediumTable';
import RoundTable from './TableTypes/RoundTable';
//import PartyTable from './TableTypes/PartyTable';
import CoupleTable from './TableTypes/CoupleTable';

 
 function Tables() {
   return (
     <div class="main">
     {/* <img src={tablelay} alt="Restaurant" id="tlayout"/> */}
    <div class="col1">
     <MediumTable tablename="Table1"/>
     <hr class="short"></hr>
     <MediumTable tablename="Table2"/>
     <hr class="short"></hr>
     <MediumTable tablename="Table3"/>
     <hr class="short"></hr>
     <MediumTable tablename="Table4"/>
     <hr class="short"></hr>
     </div>

     <div class="col2">
     <div class="vl"></div>
     <div class="vl"></div>
     </div>

     <div class="col3">
     <RoundTable tablename="Table1"/>
     
     <RoundTable tablename="Table2"/>
     
     <RoundTable tablename="Table3"/>
     
     
     </div>

     </div>
   )
 }
 
 export default Tables
 