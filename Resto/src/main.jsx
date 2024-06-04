import React from 'react';
import ReactDOM from 'react-dom/client';
import { Joy } from './LandingPage/Components/Joy';
import Admin from './AdminDashboard/Components/Admin';
import Reservation from './ReservationPage/Components/Reservation';
import KitchenStaff from './KitchenStaff Dashboard/Components/KitchenStaff';
import { Customer } from './Customer Dashboard/Components/Customer';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Joy />
    <Admin />
    <Reservation/>
    <KitchenStaff/>
    <Customer/>
  </React.StrictMode>
)
