import React from 'react'
import './reservation.css';
import Tables from './Tables'
import Booking from './Booking'


function Reservation() {
  return (
    <div>
      
      <div class="container">
        <header class="header">Header</header>
        <div class="content"> 
        <div class="tables"><Tables/></div> 
        <div class="booking">Booking</div> 
        </div>
        <footer class="footer">Footer</footer>
      </div>
    </div>
  )
}

export default Reservation

