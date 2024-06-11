import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './NewLandingpage.css';
import logo from './images/logo.png';
import home1 from './images/Home.jpg';
import home2 from './images/Home2.jpg';
import home3 from './images/Home3.jpg';
import blob from './images/blob.png';
import foodimage from './images/food-image.png';
import hotal1 from './images/hotal1.jpg';
import hotal2 from './images/hotal2.jpg';
import hotal3 from './images/hotal3.jpg';
import hotal4 from './images/hotal4.jpg';
import hotal5 from './images/hotal5.jpg';
import hotal6 from './images/hotal6.jpg';
import click from './icons/click.png';
import food from './icons/foodicon.png';
import login from './icons/login.png';
import RestaurantRegister from './RestaurantRegister';
import CustomerRegister from './CustomerRegister';


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

            <div className="home" style={backgroundImageStyle}>
                <div className="Home-content">
                    <p className='Resto'>RESTO</p>
                    <button className='home-btn'>Explore</button>
                </div>
            </div>

            <div className='sec2' id='sec2'>
                <div className="sec2-div1">
                    <img src={blob} className='blob'/>
                </div>
                <div className="sec2-div2">
                    <img src={foodimage} className='food-image'/>
                </div>
                <div className="sec2-div3">
                    <h2 className='sec2-heading'>
                        Pre order & Enjoy<br />
                        Your Meal with <br />
                        Reserved Table
                    </h2>
                    <p className='sec2-para'>
                        Simple description about our pre-ordering<br />
                        system. Simple description about our pre-ordering<br />
                        system. Simple description about our pre-ordering<br />
                    </p>
                    <button className='sec2-btn'>Learn More</button>
                </div>
            </div>

            <div className="sec3" id='sec3'>
                <div className="container1">
                    <div>
                        <div
                            className="sec3-image"
                            style={{
                                backgroundImage: `url(${hotal1})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                        </div>
                        <div className="sec3-imagedesc">Restaurant Name</div>
                        <div className="stars">stars</div>
                    </div>
                    <div>
                        <div
                            className="sec3-image"
                            style={{
                                backgroundImage: `url(${hotal2})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                        </div>
                        <div className="sec3-imagedesc">Restaurant Name</div>
                        <div className="stars">stars</div>
                    </div>
                    <div>
                        <div
                            className="sec3-image"
                            style={{
                                backgroundImage: `url(${hotal3})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                        </div>
                        <div className="sec3-imagedesc">Restaurant Name</div>
                        <div className="stars">stars</div>
                    </div>
                </div>
                <div className="container2">
                    <div>
                        <div
                            className="sec3-image"
                            style={{
                                backgroundImage: `url(${hotal4})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                        </div>
                        <div className="sec3-imagedesc">Restaurant Name</div>
                        <div className="stars">stars</div>
                    </div>
                    <div>
                        <div
                            className="sec3-image"
                            style={{
                                backgroundImage: `url(${hotal5})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                        </div>
                        <div className="sec3-imagedesc">Restaurant Name</div>
                        <div className="stars">stars</div>
                    </div>
                    <div>
                        <div
                            className="sec3-image"
                            style={{
                                backgroundImage: `url(${hotal6})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                        </div>
                        <div className="sec3-imagedesc">Restaurant Name</div>
                        <div className="stars">stars</div>
                    </div>
                </div>
            </div>

            <div className="sec4" id='sec4'>
                <div className="sec4-heading">
                    <p className='heading'>How It Works</p>
                    <div className='sub-heading'>
                        <p>Simple description about our website and explain about the registration process.</p>
                    </div>
                </div>
                <div className="sec4-content">
                    <div className="card1">
                        <img src={login} className='click-icon' alt="Register"/>
                        <p className='card-heading'>Register</p>
                        <p className='card-desc'>Sample description here</p>
                    </div>
                    <div className="card2">
                        <img src={click} className='click-icon' alt="Choose Your Table"/>
                        <p className='card-heading'>Choose Your Table</p>
                        <p className='card-desc'>Sample description here</p>
                    </div>
                    <div className="card3">
                        <img src={food} className='click-icon' alt="Pre-order Meals"/>
                        <p className='card-heading'>Pre-order Meals</p>
                        <p className='card-desc'>Sample description here</p>
                    </div>
                </div>
                <div className="sec4-register">
                    <div className="register-hotal">
                        <p className='card-desc'>Register as a Restaurant</p>
                        <button className='sec4-btn' onClick={openModal}>Register</button>
                    </div>
                    <div className="register-customer">
                        <p className='card-desc'>Register as a Customer</p>
                        <button className='sec4-btn' onClick={openModaltwo}>Register</button>
                    </div>
                </div>
            </div>

            <div className='sec5' id='sec5'>
                <div className="sec5-heading">
                    <p className='Footer-heading'>Have a Question In Mind?</p>
                    <p className='Footer-heading'>Let Us Help You</p>
                </div>
                <div className="Footer-container">
                    <div className='Footer-mail-box'>
                        <div className='Footer-mail'>
                            <input type='email' placeholder=' your-info@gmail.com '></input>
                            <button type='Submit' className="Footer-btn">Submit</button>
                        </div>
                    </div>
                    <div className="Footer-contact-info">
                        <div className='Footer-contact-sec1'>
                            <p className='desc'>Resto</p>
                            <p className='desc'>--Social icons--</p>
                        </div>
                        <div className='Footer-contact-sec1'>
                            <p className='desc'>Quality</p>
                            <p className='desc'>Help</p>
                            <p className='desc'>Share</p>
                            <p className='desc'>Careers</p>
                        </div>
                        <div className='Footer-contact-sec1'>
                            <p className='desc'>+94 55 5555555</p>
                            <p className='desc'>abc@resto.lk</p>
                            <p className='desc'>Address here</p>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={Restaurant}
                onRequestClose={closeModal}
                className="Modal-Restaurant"
                overlayClassName="Overlay-Restaurant"
                shouldCloseOnOverlayClick={true} // Add this line
            >
            <RestaurantRegister closeModal={closeModal} />
            </Modal>

            <Modal
                isOpen={Customer}
                onRequestClose={closeModaltwo}
                className="Modal"
                overlayClassName="Overlay"
                shouldCloseOnOverlayClick={true} // Add this line
            >
            <CustomerRegister closeModal={closeModaltwo} />
            </Modal>

        </div>
    );
}
