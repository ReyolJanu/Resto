import React from 'react';
import './Css/CustomerRegister.css'; 
import logo from './images/logo.png'

const CustomerRegister = ({ closeModal }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data here if needed
        closeModal(); // Close the modal after form submission
    };

    return (
        <div className="modal-content-customer">
            <div className="header">
                <div className="logodiv"><img src={logo} className='logo'/></div>
                <div className="btn-div"><button type="button" onClick={closeModal} className='close-btn'>Close</button></div>
            </div>
            <div className="customerform-div">
                <form onSubmit={handleSubmit}>
                    <div className="sec1">
                    <input type='text' className='customer-input' placeholder='First Name'/>
                    <input type='text' className='customer-input' placeholder='First Name'/>
                    </div>
                    <div className="sec1">
                    <input type='text' className='customer-input-address' placeholder='Postal Address'/>
                    </div>
                    <div className="sec1">
                    <input type='text' className='customer-input' placeholder='City'/>
                    <input type='text' className='customer-input-postal' placeholder='Postal Code'/>
                    <select name="provices" className='customer-select'>
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
                    <div className="sec1">
                    <input type='email' className='customer-input-address' placeholder='Email'/>
                    </div>
                    <div className="sec1">
                    <input type='number' className='customer-input' placeholder='Telephone Number'/>
                    <input type='number' className='customer-input' placeholder='LanLine Number'/>
                    </div>

                    
                    <div className="sec1">
                    <input type='text' className='customer-input' placeholder='NIC'/>
                    <div className="border-div"><label className='gender-label'>Gender</label>
                    <select name="gender" className='gender-select'> 
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="others">Others</option>
                            </select>    
                    </div>  
                    </div>
                

                
                <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default CustomerRegister;
