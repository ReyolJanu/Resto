import React from 'react'
import { ResponsiveContainer, PieChart, Pie} from 'recharts';
import { AreaChart, Area,BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { MdOutlineTableRestaurant } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import '../AdminDB/AdminDB.css'
import { BsThreeDotsVertical } from "react-icons/bs";
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"




export default function Dashboardhost() {
  const data = [
    { name: 'Asian Foods', value: 400 },
    { name: 'Westan Foods', value: 300 },
    { name: 'Desserts', value: 250 },
    { name: 'Drinks', value: 100 },
  ];
  
  const dat = [
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
      <div className="rootpart">
                <div className="cart-div">
                    
                <div className="cart">
                          <div className='card-inner'>
                            <p class="title">RESTAURANTS</p>
                            <span className='icon1'><IoFastFoodOutline /></span>
                          </div>
                        <span class="count">10</span>
                    </div>

                    <div className="cart">
                      <div className='card-inner'>
                        <p class="title">CUSTOMERS</p>
                        <span className='icon1'><FaRegUser /></span>
                      </div>
                        <span class="count">117</span>
                    </div>

                    <div className="cart">
                      <div className='card-inner'>
                        <p class="title">RESERVATIONS</p>
                        <span className='icon1'><MdOutlineTableRestaurant /></span>
                      </div>
                        <span class="count">211</span>
                    </div>

                    <div className="cart">
                      <div className='card-inner'>
                        <p class="title">ALERTS</p>
                        <span className='icon1'><IoIosNotificationsOutline /></span>
                      </div>
                        <span class="count">12</span>
                    </div>


                </div>  

                 <div className="graph-div">
                    <div className="graph">
                        
                       <div className="image">
                        <div className="topCart">
                          <h1 className="title">Reservations</h1>
                          <BsThreeDotsVertical fontSize="SMALL"/>

                        </div>
                        <div className="bottom">

                          <div className="featuredChart">
                            <CircularProgressbar value={40} text={"40%"} strokeWidth={5} />
                          </div>
                          <p className="ptitle">Total reservations made today</p>
                          <p className="amount">11</p>
                          <p className="desc">
                             Previous reservations processing. Last reservations may not be included.
                          </p>
                        </div>
                       </div>
                        
                     </div>
                    <div className="graph1">
                        <div className="heading"> Top 7 Famous Foods in Our Restaurant</div>
                        <div className="images">
                        <ResponsiveContainer width="100%" height="100%">
                          <AreaChart
                            width={500}
                            height={400}
                            data={dat}
                            margin={{
                              top: 10,
                              right: 30,
                              left: 0,
                              bottom: 0,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#bd2026" fill="#e5c0c2" />
                          </AreaChart>
                        </ResponsiveContainer>
                   </div>
          </div>
    </div> 
    </div> 
  )
}


