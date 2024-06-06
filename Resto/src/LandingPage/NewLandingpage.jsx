import React, { useState, useEffect } from 'react';
import './NewLandingpage.css';
import logo from './images/logo.png';
import profile from './images/default-profile.png';
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

export default function NewLandingpage() {
    const [currentImage, setCurrentImage] = useState(1);
    const imagePaths = [home1, home2, home3];

    const changeBackgroundImage = () => {
        setCurrentImage(current => (current % imagePaths.length) + 1);
    };

    useEffect(() => {
        const interval = setInterval(changeBackgroundImage, 3000);
        return () => clearInterval(interval);
    }, []);

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
                        {/* <li><a href='#sec4'>Register</a></li> */}
                        <li><a href='#sec2'>Login</a></li>
                        <li><a href='#sec5'>About</a></li>
                        <li><a href='#sec3'>Book Now</a></li>
                    </ul>
                </div>
                {/* <div
                    className="nav-profile"
                    style={{
                        backgroundImage: `url(${profile})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                </div> */}
            </div>
            {/* --------------------------------------Home------------------------------------------ */}
            <div className="home" style={backgroundImageStyle}>
                <div className="Home-content">
                    <p className='Resto'>RESTO</p>
                    <button className='home-btn'>Explore</button>
                </div>
            </div>

             {/* ----------------------------------------sec2 -------------------------------------- */}
            <div className='sec2' id='sec2'>
                <div className="sec2-div1">
                    <img src={blob} className='blob'/>
                </div>
                <div className="sec2-div2">
                    <img src={foodimage}  className='food-image'/>
                </div>
                <div className="sec2-div3">
                <h2 className='sec2-heading'>
              Pre order & Enjoy<br />
                Your Meal with <br />
                Reserved Table</h2>
                <p className='sec2-para'>simple description about our pre ordering<br />
                    system simple description about our pre ordering<br />
                    system simple description about our pre ordering<br />
                    </p>
            <button className='sec2-btn'>Learn More</button>
                </div>   
            </div>

              {/* ----------------------------------------sec2 -------------------------------------- */}

            <div className="sec3" id='sec3'>
            <div class="container1">
                <div>
                <div
                    className="sec3-image"
                    style={{
                        backgroundImage: `url(${hotal1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                </div>
                    <div className="sec3-imagedesc">Restuarantname</div>
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
                    <div className="sec3-imagedesc">Restuarantname</div>
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
                    <div className="sec3-imagedesc">Restuarantname</div>
                    <div className="stars">stars</div>
                </div>
            </div>
            <div class="container2">
                <div>
                <div
                    className="sec3-image"
                    style={{
                        backgroundImage: `url(${hotal4})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                </div>
                    <div className="sec3-imagedesc">Restuarant name</div>
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
                    <div className="sec3-imagedesc">Restuarant name</div>
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
                    <div className="sec3-imagedesc">Restuarant name</div>
                    <div className="stars">stars</div>
                </div>
            </div>
            </div>

             {/* ----------------------------------------sec4 -------------------------------------- */}
             <div className="sec4" id='sec4'>
                <div className="sec4-heading">
                        <p className='heading'>How It's Works</p>
                        <div className='sub-heading'>
                             <p>description about our website 
                            and explain about registration process simply</p>
                        </div>
                </div>
                <div className="sec4-content">
                    <div className="card1">
                        <img src={login} className='click-icon'/>
                        <p className='card-heading'>Register</p>
                        <p className='card-desc'>sample description here</p>
                    </div>
                    <div className="card2">
                        <img src={click} className='click-icon'/>
                        <p className='card-heading'>Choice Your Table</p>
                        <p className='card-desc'>sample description here</p>
                    </div>
                    <div className="card3">
                        <img src={food} className='click-icon'/>
                        <p className='card-heading'>Pre-order Meals</p>
                        <p className='card-desc'>sample description here</p>
                    </div>
                </div>
                <div className="sec4-register">
                    <div className="register-hotal">
                        <p className='card-desc'>Register as a Restuarant</p> 
                        <button className='sec4-btn'>Register</button>
                    </div>
                    <div className="register-customer">
                        <p className='card-desc'>Register as a Customer</p> 
                        <button className='sec4-btn'>Register</button>
                    </div>
                </div>
             </div>

             {/* ----------------------------------------sec4 -------------------------------------- */}

              <div className='sec5' id='sec5'>
                <div className="sec5-heading">
                    <p className='Footer-heading'>Have Question In Mind? </p>
                    <p className='Footer-heading'>Let Us Help You </p>
                </div>                            
                    <div class="Footer-container">
                        <div className='Footer-mail-box'>
                            <div className='Footer-mail'>
                                <input type='email' placeholder=' your-info@gmail.com '></input>
                                <button type='Submit' class="Footer-btn">Submit</button>
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
                            <p className='desc'>Works</p>
                            <p className='desc'>Info</p>
                        </div>
                     <div className='Footer-contact-sec1'>
                            <p className='desc'>O70-3768910</p>
                            <p className='desc'>resto.bookinginfo<br />@gmail.com</p>
                    </div>
                    <div className='Footer-contact-sec1'>
                        <p className='desc'>Terms & Contitions</p>
                        <p className='desc'>Privacy Policy</p>
                    </div>
                </div>
        </div>
    </div>

        </div>
    );
}
