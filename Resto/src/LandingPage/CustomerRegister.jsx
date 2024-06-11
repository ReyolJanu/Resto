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

                
                <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default CustomerRegister;
