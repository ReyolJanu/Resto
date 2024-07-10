import React, { useState, useEffect } from 'react';
import '/src/ReservationPage/Css/booking.css';

function Booking() {
  const [showFoodSelection, setShowFoodSelection] = useState(false);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [foodName, setFoodName] = useState('Pizza');
  const [quantity, setQuantity] = useState(1);
  const [preferredTimes, setPreferredTimes] = useState([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const foodOptions = ['Pizza', 'Burger', 'Pasta', 'Salad'];
  const timeSlots = {
    '8': ['8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM'],
    '10': ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'],
    '12': ['12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM'],
    '14': ['2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM'],
    '16': ['4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM'],
    '18': ['6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'],
    '20': ['8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM']
  };

  useEffect(() => {
    if (selectedTimeSlot) {
      setPreferredTimes(timeSlots[selectedTimeSlot]);
    }
  }, [selectedTimeSlot]);

  const handleCheckboxChange = () => {
    setShowFoodSelection(!showFoodSelection);
    setSelectedFoods([]); // Clear selected foods when checkbox is unchecked
  };

  const handleFoodNameChange = (e) => {
    setFoodName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleFoodSubmit = () => {
    setSelectedFoods([...selectedFoods, { foodName, quantity }]);
  };

  const handleClearSelection = () => {
    setSelectedFoods([]);
  };

  const handleTimeSlotChange = (e) => {
    setSelectedTimeSlot(e.target.value);
  };

  return (
    <div className="booking-frm">
      <h1 className="booking-title">Book a Table</h1>
      <hr className="booking-titleline"></hr>
      <label>Party Size</label><br></br>
      <input type="text" placeholder="2 people"></input><br></br>

      <div className="booking-dateandtime">
        <div className="booking-date">
          <label>Date</label><br></br>
          <input type="date"></input>
        </div>
        <div className="booking-time">
          <label htmlFor="time">Time:</label><br></br>
          <select name="time" id="booking-time" onChange={handleTimeSlotChange}>
            <option value="">Select Time Slot</option>
            <option value="8">  8am to 10am</option>
            <option value="10">10am to 12pm</option>
            <option value="12">12pm to 2pm</option>
            <option value="14"> 2pm to 4pm</option>
            <option value="16"> 4pm to 6pm</option>
            <option value="18"> 6pm to 8pm</option>
            <option value="20"> 8pm to 10pm</option>
          </select>
        </div>
      </div>

      <label>Preferred Time</label>
      <div className="booking-preferredtimes">
        {preferredTimes.map((time, index) => (
          <button key={index} className="booking-preferredtime">{time}</button>
        ))}
      </div>

      <div className="booking-orderfood">
        <div className="booking-foodenable">
          <label>Do You Want to order Food</label>
          <input type="checkbox" id="booking-foodordercheckbox" onChange={handleCheckboxChange} />
        </div>

        {showFoodSelection && (
          <>
            <div className="booking-foodnameandquan">
              <div className="booking-foodname">
                <label htmlFor="foodName"></label>
                <select id="booking-foodName" value={foodName} onChange={handleFoodNameChange}>
                  {foodOptions.map((food) => (
                    <option key={food} value={food}>
                      {food}
                    </option>
                  ))}
                </select>
              </div>

              <div className="booking-quantity">
                <label htmlFor="quantity"> </label>
                <select id="booking-quantity" value={quantity} onChange={handleQuantityChange}>
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select><br></br>
              </div>
              <div> <button onClick={handleFoodSubmit} className="booking-btnfood-submit">Submit</button></div>
            </div>

            <textarea className="booking-textarea"
              readOnly
              value={selectedFoods.map((food) => `${food.foodName} x ${food.quantity}`).join('\n')}
              rows="5"
            ></textarea><br></br>

            <button onClick={handleClearSelection} className="booking-btnclear">Clear</button>
          </>
        )}
      </div>

      <div className="booking-bookbutton">
        <button className="booking-booknow">Book now</button>
      </div>
    </div>
  );
}

export default Booking;
