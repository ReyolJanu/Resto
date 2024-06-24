import React from 'react'
import './reservation.css';


function Booking() {
  return (
    <div>
       <h1>Book a Table</h1>
    <label>Party Size</label><br></br>
    <input type ="text"></input><br></br>
    
    <div class="dateandtime">
      <div class="date"> 
      <label>Date</label><br></br>
      <input type="date"></input>
      </div>
    <div class="time">
    <label>Time</label><br></br>
    <input type="time"></input>
    </div>
    </div>

    <label>Prefered Time</label>
    <div class="preferedtime">
    <button>9.15 PM</button>
    <button>9.15 PM</button>
    <button>9.15 PM</button>
    <button>9.15 PM</button>
    </div>
    </div>
    
  )
}

export default Booking

