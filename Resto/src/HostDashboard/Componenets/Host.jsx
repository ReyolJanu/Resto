import React from 'react'
import '../Css/Host.css'
import { MdSpaceDashboard,MdTableRestaurant,MdFeedback,MdGpsFixed  } from "react-icons/md";
import { IoNotifications,IoSettingsSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import hostimage from '../images/host3.jpg';
import logoimage from '../images/logo.png';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Dashboardhost from './Dashboardhost';
import Reservationhost from './Reservationhost';


const Host = () => {
 
  return (
    
       <BrowserRouter>
        <div className="content">
          <div class="left">  
           
           <div class="id">
                <img  class="hostimage"src={hostimage} ></img> 
               <span class="nav-items">Restaurant Host</span>
            </div>

           <div className="list">
           <ul>
           <li><Link to="/"><i><MdSpaceDashboard /></i><span>Dashboard</span></Link> </li>
           <li><Link to="/Reservation"><i><MdGpsFixed /></i><span>Reservation</span></Link></li>
           <li><Link to="/Tables"><i>< MdTableRestaurant/></i><span>Tables</span></Link></li>
           <li><Link to="/Notification"> <i><IoNotifications/></i><span>Notification</span></Link></li>
           <li><Link to="/Feedback"><i><MdFeedback/></i><span>Feedback</span></Link></li>
           <li><Link to="/Settings"><i><IoSettingsSharp/></i><span>Settings</span></Link></li>
           <li class="logout"><Link to="/Logout"><i><IoMdLogOut/></i><span>Logout</span></Link></li>
           </ul>
           </div>
      
          </div>

          {/* top */}
       <div className="right">
       <div class="top">
              <div class="logo">
                 <img class="logoimage"src={logoimage} ></img> 
              </div>
              <div class="profile">
                  <img  class="profileimage"src={hostimage} ></img> 
              </div>
           </div>

            {/* rooting part */}
       <div className="main">
         <Routes>
            <Route path='/' element={<Dashboardhost />} />
            <Route path='/Reservation' element={<Reservationhost />} />
         </Routes>
       </div>     
         
       </div>
              
      </div>  
          
      </BrowserRouter>    

  )
}

export default Host;