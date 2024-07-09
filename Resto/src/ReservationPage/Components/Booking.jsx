import React, { useState } from 'react';
import '/src/ReservationPage/Css/booking.css';

function Booking() {
  const [showFoodSelection, setShowFoodSelection] = useState(false);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [foodName, setFoodName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const foodOptions = ['Pizza', 'Burger', 'Pasta', 'Salad'];

  const handleCheckboxChange = () => {
    setShowFoodSelection(!showFoodSelection);
    setSelectedFoods([]);  // Clear selected foods when checkbox is unchecked
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

  return (
    <div className="frm">
      <h1>Book a Table</h1>
      <hr className="titleline"></hr>
      <label>Party Size</label><br></br>
      <input type="text" placeholder="2 people"></input><br></br>

      <div className="dateandtime">
        <div className="date">
          <label>Date</label><br></br>
          <input type="date"></input>
        </div>
        <div className="time">
          <label>Time</label><br></br>
          <input type="time" value="09:30"></input>
        </div>
      </div>

      <label>Preferred Time</label>
      <div className="preferedtime">
        <button>9.15 AM</button>
        <button>9.30 AM</button>
        <button>9.45 AM</button>
        <button>10.00 AM</button>
      </div>


      
      
      <div className="order food">
        <div class="foodenable">

        <label>Do You Want to order Food</label>
        <input type="checkbox" id="foodOrderCheckbox" onChange={handleCheckboxChange} />
        </div>

        {showFoodSelection && (
          <>
          <div>
            <div class="foodnameandquan">
              <label htmlFor="foodName">Food Name</label>
              <select id="foodName" value={foodName} onChange={handleFoodNameChange}>
                {foodOptions.map((food) => (
                  <option key={food} value={food}>
                    {food}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="quantity">Quantity</label>
              <select id="quantity" value={quantity} onChange={handleQuantityChange}>
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select><br></br>
              <button onClick={handleFoodSubmit}>Submit</button>
            </div>
            </div>

            

            <textarea
              readOnly
              value={selectedFoods.map((food) => `${food.foodName} x ${food.quantity}`).join('\n')}
              rows="5"
            ></textarea><br></br>

            <button onClick={handleClearSelection}>Clear</button>
          </>
          
        )}
      </div>
      

      <div className="bookbutton">
        <button className="booknow">Book now</button>
      </div>
    </div>
  );
}

export default Booking;
