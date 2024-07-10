import React from 'react'
import Tables from './Tables'
import Booking from './Booking'
import '/src/ReservationPage/Css/reservation.css';
import Headerbar from './Headerbar'




function Reservation() {
  return (
    <div>
      
      <div class="container">
        <header class="reservation-header"><Headerbar/></header>
        <div class="reservation-content"> 
        <div class="reservation-tables"><Tables/></div> 
        <div class="reservation-booking"><Booking/></div> 
        </div>
      </div>
    </div>
  )
}

export default Reservation

