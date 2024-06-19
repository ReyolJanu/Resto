//import React from 'react';
import React, { useState } from 'react';
import '../Css/KitchenStaff.css';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { MdSpaceDashboard, MdTableRestaurant, MdFeedback, MdInventory  } from "react-icons/md";
import { IoNotifications, IoSettingsSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import DashboardKitchenStaff from './DashboardKitchenStaff';
import InventoryKitchenStaff from './InventoryKitchenStaff';
import Notification  from './Notification';
import logoimage from '../images/logo.png'
import KitchenStaffimage from '../images/KitchenStaff.jpg'




const KitchenStaff = () => {
  return (
    <BrowserRouter>
            <KitchenStaffContent />
        </BrowserRouter>
  )
};


const KitchenStaffContent = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const handleActive = (path) => {
      setActive(path);
  };

  return (
      <div className="content">
          <div className="left">
              <div className="id">
                 <img className="KitchenStaffimage" src={KitchenStaffimage} alt="KitchenStaff" />  
                  <span className="nav-items">Kitchen Staff</span>
              </div>

              <div className="list">
                  <ul>
                      <li className={active === '/' ? 'active' : ''} onClick={() => handleActive('/')}>
                          <Link to="/"><i><MdSpaceDashboard /></i><span>Dashboard</span></Link>
                      </li>
                      <li className={active === '/Inventory' ? 'active' : ''} onClick={() => handleActive('/Inventory')}>
                          <Link to="/Inventory"><i><MdInventory /></i><span>Inventory</span></Link>
                       </li>
                      {/* <li className={active === '/Tables' ? 'active' : ''} onClick={() => handleActive('/Tables')}>
                          <Link to="/Tables"><i><MdTableRestaurant /></i><span>Tables</span></Link>
                      </li>  */}
                      <li className={active === '/Notification' ? 'active' : ''} onClick={() => handleActive('/Notification')}>
                          <Link to="/Notification"><i><IoNotifications /></i><span>Notification</span></Link>
                      </li>
                      {/* <li className={active === '/Feedback' ? 'active' : ''} onClick={() => handleActive('/Feedback')}>
                          <Link to="/Feedback"><i><MdFeedback /></i><span>Feedback</span></Link>
                      </li> */}
                      {/* <li className={active === '/Settings' ? 'active' : ''} onClick={() => handleActive('/Settings')}>
                          <Link to="/Settings"><i><IoSettingsSharp /></i><span>Settings</span></Link>
                      </li> */}
                      <li className={`logout ${active === '/Logout' ? 'active' : ''}`} onClick={() => handleActive('/Logout')}>
                          <Link to="/Logout"><i><IoMdLogOut /></i><span>Logout</span></Link>
                      </li>
                  </ul>
              </div>
          </div>

          {/* top */}
          <div className="right">
              <div className="top">
                  <div className="logo">
                      <img className="logoimage" src={logoimage} alt="logo" />
                  </div>
                  <div className="profile">
                      <img className="profileimage" src={KitchenStaffimage} alt="profile" />
                  </div>
              </div>

              {/* routing part */}
              <div className="main">
                  <Routes>
                      <Route path='/' element={<DashboardKitchenStaff />} />
                      <Route path='/Inventory' element={<InventoryKitchenStaff />} />
                      <Route path='/Notification' element={<Notification />} />
                  </Routes>
              </div>
          </div>
      </div>
  );
};



export default KitchenStaff;