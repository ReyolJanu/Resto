import React from 'react'
import '/src/ReservationPage/Css/tables.css';

import MediumTable from './TableTypes/MediumTable';
import RoundTable from './TableTypes/RoundTable';
import PartyTable from './TableTypes/PartyTable';
import CoupleTable from './TableTypes/CoupleTable';

 
 function Tables() {
   return (
     <div class="main">
     {/* <img src={tablelay} alt="Restaurant" id="tlayout"/> */}
    <div class="col1">
     <MediumTable tablename="Medium-T1"/>
     <hr class="short"></hr>
     <MediumTable tablename="Medium-T2"/>
     <hr class="short"></hr>
     <MediumTable tablename="Medium-T3"/>
     <hr class="short"></hr>
     <MediumTable tablename="Medium-T4"/>
     <hr class="short"></hr>
     </div>

     <div class="col2">
     <div class="vl-l"></div>
     <div class="vl-l"></div>

     </div>
    <div class="col3">
      <div class="row1">
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
      <hr class="large"></hr>
      
      <div class="row2">
      <RoundTable tablename="Round-T1"/>
      <div class="vl-s2"></div>
      <RoundTable tablename="Round-T2"/>
      <div class="vl-s2"></div>
      <RoundTable tablename="Round-T3"/>
      
      </div>
      <hr class="large"></hr>
      <div class="row3">
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
 