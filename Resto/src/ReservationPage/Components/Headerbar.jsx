import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Headerbar.css';
import logo from './images/logo.png';
import home1 from './images/Home.jpg';
import home2 from './images/Home2.jpg';
import home3 from './images/Home3.jpg';



Modal.setAppElement('#root'); // Accessibility

export default function NewLandingpage() {
    const [currentImage, setCurrentImage] = useState(1);
    const [Restaurant, setRestaurant] = useState(false);
    const [Customer, setCustomer] = useState(false);
    const imagePaths = [home1, home2, home3];

    const changeBackgroundImage = () => {
        setCurrentImage(current => (current % imagePaths.length) + 1);
    };

    useEffect(() => {
        const interval = setInterval(changeBackgroundImage, 3000);
        return () => clearInterval(interval);
    }, []);

    const openModal = () => {
        setRestaurant(true);
    };

    const closeModal = () => {
        setRestaurant(false);
    };
    const openModaltwo = () => {
        setCustomer(true);
    };

    const closeModaltwo = () => {
        setCustomer(false);
    };

    const backgroundImageStyle = {
        width: '100vw',
        backgroundImage: `url(${imagePaths[currentImage - 1]})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        transition: 'background-image 0.8s ease-in-out',
    };

    return (
        <div className='main-div'>
             <div className="navbar">
                <div className="nav-logo"><img src={logo} className='logo' alt='Logo' /></div>
                <div className="nav-links">
                    <ul>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#sec2'>Login</a></li>
                        <li><a href='#sec5'>About</a></li>
                        <li><a href='#sec3'>Book Now</a></li>
                    </ul>
                </div>
            </div>

           

        </div>
    );
}
