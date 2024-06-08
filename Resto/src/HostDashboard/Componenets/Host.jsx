import React from 'react'
import '../Css/Host.css'
import { MdSpaceDashboard } from "react-icons/md";
import { MdGpsFixed } from "react-icons/md";
import { MdTableRestaurant } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { MdFeedback } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import hostimage from '../images/host3.jpg';
import logoimage from '../images/logo.png';


const Host = () => {
  return (
    <div>
      <div class="content">
        <div class="left">

          <nav> 
       
          <div class="id">
          <img  class="hostimage"src={hostimage} ></img>
          <span class=" ">Restaurant Host</span>
          </div>

          <div class="list">
          <ul>
          <li><a href="#"> 
          <i class="icon"><MdSpaceDashboard /></i>
          <span class="nav-items">Dashboard</span>
          </a> </li>
          <li><a href="#">
          <i class="icon"><MdGpsFixed /></i>
          <span class="nav-items">Reservation</span>
          </a></li>
          <li><a href="#">
          <i class="icon"><MdTableRestaurant/></i>
          <span class="nav-items">Tables</span>
          </a></li>
          <li><a href="#">
          <i class="icon"><IoNotifications /></i>
          <span class="nav-items">Notification</span>
          </a></li>
          <li><a href="#">
          <i class="icon"><MdFeedback /></i> 
          <span class="nav-items">Feedback</span>
          </a></li>
          <li><a href="#">
          <i class="icon"><IoSettingsSharp /></i> 
          <span class="nav-items">Settings</span>
          </a></li>
          <li><a href="#" class="logout">
          <i class="icon"><IoMdLogOut /></i>  
          <span class="nav-items">Logout</span>
          </a></li>
         </ul>
         </div>
         </nav>

        </div>

      <div class="right">

        <div class="top">
           <div class="logo">
              <img class="logoimage" src={logoimage} ></img>
           </div>
           <div class="profile">
              <img src={hostimage} alt=""></img>
           </div>
        </div>

        <div class="container">
       
           <div class="main">
             <div class="carts">
               <p class="title">Customers</p>
               <p class="count">30</p>
             </div>
             <div class="carts">
               <p class="title">Reservation</p>
               <p class="count">15</p>
             </div>
             <div class="carts">
               <p class="title">Preorders</p>
               <p class="count">40</p>
             </div>
             <div class="carts">
               <p class="title">Notifications</p>
               <p class="count">35</p>
             </div>

              <div class="graph">

              </div>
            </div>  
          </div>
      </div>
     </div>
   </div>
  )
}

export default Host
