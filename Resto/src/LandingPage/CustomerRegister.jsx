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
            <h2>Register as a Customer</h2>
            <form onSubmit={handleSubmit}>
                {/* Your form fields here */}
                <button type="submit">Register</button>
                <button type="button" onClick={closeModal}>Close</button>
            </form>
        </div>
    );
};

export default CustomerRegister;
