import React from 'react'
import Tables from './Tables'
import Booking from './Booking'
import '/src/ReservationPage/Css/reservation.css';
import Headerbar from './Headerbar'




function Reservation() {
  return (
    <div>
      
      <div class="container">
        <header class="header"><Headerbar/></header>
        <div class="content"> 
        <div class="tables"><Tables/></div> 
        <div class="booking"><Booking/></div> 
        </div>
      </div>
    </div>
  )
}

export default Reservation

