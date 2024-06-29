import React from 'react'
import '/src/ReservationPage/Css/booking.css';

function Booking() {
  return (
    <div class="frm">
       <h1>Book a Table</h1>
       <hr class="titleline"></hr>
    <label>Party Size</label><br></br>
    <input type ="text" placeholder='2 people'></input><br></br>
    
    <div class="dateandtime">
      <div class="date"> 
      <label>Date</label><br></br>
      <input type="date"></input>
      </div>
    <div class="time">
    <label>Time</label><br></br>
    <input type="time" value="09:30"></input>
    </div>
    </div>

    <label>Prefered Time</label>
    <div class="preferedtime">
    <button>9.15 AM</button>
    <button>9.30 AM</button>
    <button>9.45 AM</button>
    <button>10.00 AM</button>
    </div>
    <div class="bookbutton">
      <button class="booknow">Book now</button>
    </div>
    
    </div>
    
  )
}

export default Booking

