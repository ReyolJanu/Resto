import React from 'react'
import '/src/ReservationPage/Css/tables.css';

import MediumTable from './TableTypes/MediumTable';
import RoundTable from './TableTypes/RoundTable';
import PartyTable from './TableTypes/PartyTable';
import CoupleTable from './TableTypes/CoupleTable';

 
 function Tables() {
   return (
     <div class="tables-main">
     {/* <img src={tablelay} alt="Restaurant" id="tlayout"/> */}
    <div class="tables-col1">
     <MediumTable tablename="Medium-T1"/>
     <hr class="tables-short"></hr>
     <MediumTable tablename="Medium-T2"/>
     <hr class="tables-short"></hr>
     <MediumTable tablename="Medium-T3"/>
     <hr class="tables-short"></hr>
     <MediumTable tablename="Medium-T4"/>
     
     </div>

     <div class="tables-col2">
     <div class="vl-l"></div>
     <div class="vl-l"></div>

     </div>
    <div class="tables-col3">
      <div class="tables-row1">
         <div class="scol1">
         <CoupleTable tablename="Couple1"/>
         </div>
         <div class="vl-s"></div>
         
        <div class="scol2">
        <CoupleTable tablename="Couple2"/>
        </div>
        <div class="vl-s"></div>
        <div class="scol3">
          <PartyTable tablename="Party-Table"/>
        </div>
      </div>
      <hr class="tables-large"></hr>
      
      <div class="tables-row2">
      <RoundTable tablename="Round-T1"/>
      <div class="vl-s2"></div>
      <RoundTable tablename="Round-T2"/>
      <div class="vl-s2"></div>
      <RoundTable tablename="Round-T3"/>
      
      </div>
      <hr class="tables-large"></hr>
      <div class="tables-row3">
      <RoundTable tablename="Round-T4"/>
      <div class="vl-s2"></div>
      <RoundTable tablename="Round-T5"/>
      <div class="vl-s2"></div>
      <RoundTable tablename="Round-T6"/>
      
      </div>
    </div>
     

     </div>
   )
 }
 
 export default Tables
 