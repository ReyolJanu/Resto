import React from 'react'
import { ResponsiveContainer, PieChart, Pie} from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { MdOutlineTableRestaurant } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import '../Css/AdminDB.css'




export default function Dashboardhost() {
  const data = [
    { name: 'Asian Foods', value: 400 },
    { name: 'Westan Foods', value: 300 },
    { name: 'Desserts', value: 250 },
    { name: 'Drinks', value: 100 },
  ];
  
  const dat = [
    {
      name: 'Sashimi',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Tortilla',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Biriyani',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Tacos',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Caviar​',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Pizza',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Fried Rice',
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
                        <div className="heading">Restaurant Food Items's Sales </div>
                        <div className="image">
                    <ResponsiveContainer>
                    <PieChart>
                    <Pie dataKey="value" data={data} fill="#bd2026" label />
                    </PieChart>
                    </ResponsiveContainer>
                    </div>
                        
                     </div>
                    <div className="graph">
                        <div className="heading"> Top 7 Famous Foods in Our Restaurant</div>
                        <div className="images">
                        <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                         width={500}
                         height={300}
                         data={dat}
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
                        <Bar dataKey="pv" fill="#bd2026" background={{ fill: '#eee' }} />
                        </BarChart>
                        </ResponsiveContainer>
                   </div>
          </div>
    </div> 
    </div> 
  )
}


