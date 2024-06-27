import React from 'react'
import '/src/ReservationPage/Css/tables.css';
import tablelay from '/src/ReservationPage/Images/restaurant1.png';
import MediumTable from './TableTypes/MediumTable';
import RoundTable from './TableTypes/RoundTable';
import PartyTable from './TableTypes/PartyTable';
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
     <div class="vl-l"></div>
     <div class="vl-l"></div>

     </div>
    <div class="col3">
      <div class="row1">
         <div class="scol1">
         <CoupleTable tablename="Table1"/>
         </div>
         <div class="vl-s"></div>
         
        <div class="scol2">
        <CoupleTable tablename="Table1"/>
        </div>
        <div class="vl-s"></div>
        <div class="scol3">
          <PartyTable/>
        </div>
      </div>
      <hr class="large"></hr>
      
      <div class="row2">
      <RoundTable tablename="Table1"/>
      <div class="vl-s2"></div>
      <RoundTable tablename="Table1"/>
      <div class="vl-s2"></div>
      <RoundTable tablename="Table1"/>
      
      </div>
      <hr class="large"></hr>
      <div class="row3">
      <RoundTable tablename="Table1"/>
      <div class="vl-s2"></div>
      <RoundTable tablename="Table1"/>
      <div class="vl-s2"></div>
      <RoundTable tablename="Table1"/>
      
      </div>
    </div>
     

     </div>
   )
 }
 
 export default Tables
 