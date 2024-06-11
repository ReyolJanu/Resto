import React from 'react';
import './Css/RestaurantRegister.css'; // Import your CSS file
import logo from './images/logo.png'

const RestaurantRegister = ({ closeModal }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data here if needed
        closeModal(); // Close the modal after form submission
    };

    return (
        <div className="modal-content">
            <div className="header">
                <div className="header-msg"><img src={logo}  className='logo'/></div>
                <div className="header-btn"><button type="button" onClick={closeModal} className='close-btn'>Close</button></div>
            </div>
            <p className='heading'>Register as a Restaurant</p>
            <form onSubmit={handleSubmit}>
                <div className="form-div">
                    <div className="section">

                            <label className='label'>First Name</label>
                            <input type='text' required  className='input'/>
                            &nbsp;&nbsp;
                            <label className='label'>Last Name</label>
                            <input type='text' required  className='input'/>

                    </div>
                     <div className="section">

                            <label className='label'>Restaurant Name</label>
                            <input type='text' required  className='input'/>
                            &nbsp;&nbsp;
                            <label className='label'>Registation Number</label>
                            <input type='text' required  className='input'/>

                    </div>
                    <div className="section">

                            <label className='label'>Contact Number</label>
                            <input type='number' required  className='input'/>
                            &nbsp;&nbsp;
                            <label className='label'>Email</label>
                            <input type='email' required  className='input'/>

                    </div>
                     <div className="section">

                            <label className='label'>City</label>
                            <input type='text' required  className='input'/>
                            &nbsp;&nbsp;
                            <label className='label'>Province</label>
                            <select name="provices" className='select'>
                                <option value="Eastern">Eastern</option>
                                <option value="Western">Western</option>
                                <option value="Northern">Northern</option>
                                <option value="Central">Central</option>
                                <option value="Southern">Southern</option>
                                <option value="North Western">North Western</option>
                                <option value="Uva">Uva</option>
                                <option value="Sabaragamuwa ">Sabaragamuwa </option>
                                <option value="North Central">North Central</option>
                            </select>

                    </div>

                     <div className="section">

                            <label className='tablelabel'>Table Details</label>
                            <label className='tables'>Single Tables</label>
                    <select name="tables">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="9+">9+</option>
                    </select>&nbsp;&nbsp;
                    <label className='tables'>Couple Tables</label>
                    <select name="tables">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="9+">9+</option>
                    </select>&nbsp;&nbsp;
                    <label className='tables'>Squard Tables</label>
                    <select name="tables">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="9+">9+</option>
                    </select>&nbsp;&nbsp;
                    <label className='tables'>PartyTables</label>
                    <select name="tables">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="9+">9+</option>
                    </select>
                    </div>

                    <div className="section">
                            <label className='textarea-label'>Feeds</label>
                            <textarea  className='textarea'/>
                    </div>
                    
                    
                
                </div>   
                <div className="section">
                    <div className='footer'>
                        <p className='pre-msg'>System will sent username and password to your email
                            and also aditionaly Kitchen Staff username password attached your mail
                            so You can access RestuarentDashboard and KitchenStaff Dashboard via given
                            Credentials.
                        </p>
                    </div>
                </div>

                    <button type="submit" className='submit-btn'>Register</button>


                
            </form>
        </div>
    );
};

export default RestaurantRegister;
