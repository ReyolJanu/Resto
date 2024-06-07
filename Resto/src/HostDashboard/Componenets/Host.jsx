import React from 'react'
import '../Css/Host.css'
import { FaBeer } from 'react-icons/fa';
import hostimage from '../images/host3.jpg';
const Host = () => {
  return (
    <div>
      <section>
        <div class="left">

          <nav> 
       
          <div class="id">
          <img  class="hostimage"src={hostimage} ></img>
          <span class="nav-items"><b>Restaurant Host ai</b></span>
          </div>
       
          <ul>
          <li><a href="#"> 
          <i class="icon"><FaBeer /></i>
          <span class="nav-items">Dashboard</span>
          </a> </li>
          <li><a href="#">
          <i class="icon"><FaBeer /></i>
          <span class="nav-items">Reservation</span>
          </a></li>
          <li><a href="#">
          <i class="icon"><FaBeer /></i>
          <span class="nav-items">Tables</span>
          </a></li>
          <li><a href="#">
          <i class="icon"><FaBeer /></i>
          <span class="nav-items">Notification</span>
          </a></li>
          <li><a href="#">
          <i class="icon"><FaBeer /></i> 
          <span class="nav-items">Feedback</span>
          </a></li>
          <li><a href="#">
          <i class="icon"><FaBeer /></i> 
          <span class="nav-items">Settings</span>
          </a></li>
          <li><a href="#" class="logout">
          <i class="icon"><FaBeer /></i>  
          <span class="nav-items">Logout</span>
          </a></li>
         </ul>
         </nav>

        </div>
    
        <div class="top">
           <div class="logo">
              <img class="logoimage" src="" ></img>
           </div>
           <div class="profile">
              <img src="" alt="profileimage"></img>
           </div>
        </div>
       
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

      </section>

   </div>
  )
}

export default Host
