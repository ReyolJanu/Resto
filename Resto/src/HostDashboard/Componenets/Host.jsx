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
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Host = () => {
   const data = [
      {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];
    
  return (
    <div>
      
        <div className="content">
          <div class="left">  
           
           <div class="id">
                <img  class="hostimage"src={hostimage} ></img> 
               <span class="nav-items">Restaurant Host</span>
            </div>

           <div className="list">
           <ul>
           <li><a href="#"> 
               <i class=""><MdSpaceDashboard /></i>
               <span class="nav-items">Dashboard</span>
           </a> </li>
          <li><a href="#">
               <i class=""><MdGpsFixed /></i>
               <span class="nav-items">Reservation</span>
           </a></li>
          <li><a href="#">
              <i class="">< MdTableRestaurant/></i> 
              <span class="nav-items">Tables</span>
           </a></li>
          <li><a href="#">
             <i class=""><IoNotifications/></i>
             <span class="nav-items">Notification</span>
          </a></li>
          <li><a href="#">
              <i class=""><MdFeedback/></i> 
              <span class="nav-items">Feedback</span>
           </a></li>
          <li><a href="#">
              <i class=""><IoSettingsSharp/></i> 
              <span class="nav-items">Settings</span>
           </a></li>
          <li><a href="#" class="logout">
             <i class=""> <IoMdLogOut/></i> 
             <span class="nav-items">Logout</span>
           </a></li>
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
            <div className="rootpart">
               <div className="cart-div">
                    <div className="cart">
                       <p class="title">Reservations</p>
                       <p class="count">55</p>
                    </div>
                    <div className="cart">
                       <p class="title">Preorders</p>
                       <p class="count">60</p>
                    </div>
                    <div className="cart">
                       <p class="title">Customers</p>
                       <p class="count">45</p>
                    </div>
                    <div className="cart">
                      <p class="title">Notifications</p>
                      <p class="count">60</p>
                    </div>
                 </div>  

                 <div className="graph-div">
                    <div className="graph">
                        <div className="heading"></div>
                        <div className="image"></div>
                     </div>
                    <div className="graph">
                        <div className="heading"></div>
                        <div className="image">
                        <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                        }}
                        barSize={20}
                        >
                      <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
                     </BarChart>
                     </ResponsiveContainer>
                        </div>
                    </div>
                 </div>
            </div>  
          
          </div>
      </div>
  </div>
  )
}

export default Host;