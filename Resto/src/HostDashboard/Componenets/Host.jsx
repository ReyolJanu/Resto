import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboardhost from './Dashboardhost';
import Reservationhost from './Reservationhost';
import { MdSpaceDashboard, MdTableRestaurant, MdFeedback, MdGpsFixed } from "react-icons/md";
import { IoNotifications, IoSettingsSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import hostimage from '../images/host3.jpg';
import logoimage from '../images/logo.png';
import '../Css/Host.css';

const Host = () => {
    const [activeItem, setActiveItem] = useState('Dashboard');

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <BrowserRouter>
            <div className="content">
                <div className="left">
                    <div className="id">
                        <img className="hostimage" src={hostimage} alt="Host" />
                        <span className="nav-items">Restaurant Host</span>
                    </div>

                    <div className="list">
                        <ul>
                            <li className={activeItem === 'Dashboard' ? 'active' : ''}>
                                <Link to="/" onClick={() => handleItemClick('Dashboard')}>
                                    <i><MdSpaceDashboard /></i><span>Dashboard</span>
                                </Link>
                            </li>
                            <li className={activeItem === 'Reservation' ? 'active' : ''}>
                                <Link to="/Reservation" onClick={() => handleItemClick('Reservation')}>
                                    <i><MdGpsFixed /></i><span>Reservation</span>
                                </Link>
                            </li>
                            {/* Add other menu items similarly */}
                        </ul>
                    </div>
                </div>

                {/* top */}
                <div className="right">
                    {/* Routing part */}
                    <div className="main">
                        <Routes>
                            <Route path='/' element={<Dashboardhost />} />
                            <Route path='/Reservation' element={<Reservationhost />} />
                            {/* Add other Route components as needed */}
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default Host;
