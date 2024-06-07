import React from 'react'
import '../Css/Host.css'
const Host = () => {
  return (
    <div>
      <section>
        <div class="left">

          <div class="id">
          <img src="" alt="hostimage"></img>
          <span class="nav-items"><b>Restaurant Host</b></span>
          </div>

          <nav>  
          <ul>
          <li><a href="#"> 
          <i class=""></i>
          <span class="nav-items"><b>Dashboard</b></span>
          </a> </li>
          <li><a href="#">
          <i class=""></i>
          <span class="nav-items"><b>Reservation</b></span>
          </a></li>
          <li><a href="#">
          <i class=""></i> 
          <span class="nav-items"><b>Tables</b></span>
          </a></li>
          <li><a href="#">
          <i class=""></i>
          <span class="nav-items"><b>Notification</b></span>
          </a></li>
          <li><a href="#">
          <i class=""></i> 
          <span class="nav-items"><b>Feedback</b></span>
          </a></li>
          <li><a href="#">
          <i class=""></i> 
          <span class="nav-items"><b>Settings</b></span>
          </a></li>
          <li><a href="#" class="logout">
          <i class=""></i> 
          <span class="nav-items"><b>Logout</b></span>
          </a></li>
         </ul>
         </nav>

        </div>
        <div class="top">
           <div class="logo">
              <img src="" alt="logoimage"></img>
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
