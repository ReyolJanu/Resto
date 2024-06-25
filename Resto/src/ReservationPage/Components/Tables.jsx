import React from 'react'
import '/src/ReservationPage/Css/tables.css';
import tablelay from '/src/ReservationPage/Images/restaurant1.png';
import MediumTable from './TableTypes/MediumTable';
//import RoundTable from './TableTypes/RoundTable';
//import PartyTable from './TableTypes/PartyTable';
import CoupleTable from './TableTypes/CoupleTable';

 
 function Tables() {
   return (
     <div>
     {/* <img src={tablelay} alt="Restaurant" id="tlayout"/> */}
    
     <MediumTable tablename="Table1"/>
     <hr class="short"></hr>
     <MediumTable tablename="Table2"/>
     <hr class="short"></hr>
     <MediumTable tablename="Table3"/>
     <hr class="short"></hr>
     <MediumTable tablename="Table4"/>
     <hr class="short"></hr>


     </div>
   )
 }
 
 export default Tables
 