import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

import { MdSpaceDashboard, MdTableRestaurant, MdFeedback, MdGpsFixed } from "react-icons/md";
import { IoNotifications, IoSettingsSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import hostimage from '../../images/host.png'
import '../AdminDB/Admin.css'
import AdminDB from './AdminDB'

import User from '../User/User';
import Reservation from '../Reservation/Reservation';
import Notification from '../Notification/Notification';
import Settings from '../Settings/Settings';
import TableMain from '../Restaurant/TableMain';
// import Restaurants from './Restaurant/Restaurants';


const Host = () => {
    return (
        <BrowserRouter>
            <HostContent />
        </BrowserRouter>
    );
};

const HostContent = () => {
    const location = useLocation();
    const [active, setActive] = useState(location.pathname);

    const handleActive = (path) => {
        setActive(path);
    };

    return (
        <div className="content">
            <div className="left">
                <div className="id">
                    <img className="hostimage" src={hostimage} alt="host" />
                    <span className="nav-items">Admin</span>
                </div>

                <div className="list">
                    <ul>
                        <li className={active === '/' ? 'active' : ''} onClick={() => handleActive('/')}>
                            <Link to="/"><i><MdSpaceDashboard /></i><span>Dashboard</span></Link>
                        </li>
                        <li className={active === '/Restaurants' ? 'active' : ''} onClick={() => handleActive('/Restaurants')}>
                            <Link to="/Restaurants"><i><MdGpsFixed /></i><span>Restaurants</span></Link>
                        </li>
                        <li className={active === '/User' ? 'active' : ''} onClick={() => handleActive('/User')}>
                            <Link to="/User"><i><MdTableRestaurant /></i><span>Users</span></Link>
                        </li>

                        <li className={active === '/Reservation' ? 'active' : ''} onClick={() => handleActive('/Reservation')}>
                            <Link to="/Reservation"><i><MdTableRestaurant /></i><span>Reservations</span></Link>
                        </li>

                        <li className={active === '/Notification' ? 'active' : ''} onClick={() => handleActive('/Notification')}>
                            <Link to="/Notification"><i><IoNotifications /></i><span>Notification</span></Link>
                        </li>

                        <li className={active === '/Settings' ? 'active' : ''} onClick={() => handleActive('/Settings')}>
                            <Link to="/Settings"><i><IoSettingsSharp /></i><span>Settings</span></Link>
                        </li>
                        <li className={`logout ${active === '/Logout' ? 'active' : ''}`} onClick={() => handleActive('/Logout')}>
                            <Link to="/Logout"><i><IoMdLogOut /></i><span>Logout</span></Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* top */}
            <div className="right">
                <div className="top">
                    {/* <div className="logo">
                        <img className="logoimage" src={logoimage} alt="logo" />
                    </div> */}
                    
                    <div className="profile">
                        <img className="profileimage" src={hostimage} alt="profile" />
                    </div>
                </div>

                {/* routing part */}
                <div className="main">
                    <Routes>
                        <Route path='/' element={<AdminDB />} />
                        <Route path='/Restaurants' element={<TableMain/>} />
                        <Route path='/User' element={<User />}/>
                        <Route path='/Reservation' element={<Reservation />}/>
                        <Route path='/Notification' element={<Notification />}/>
                        <Route path='/Settings' element={<Settings />}/>
                        {/* <Route path='/Reservation' element={<Reservationhost />} /> */}
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Host;
