import React from 'react';
import ReactDOM from 'react-dom/client';
import { Joy } from './LandingPage/Components/Joy';
import Admin from './AdminDashboard/Components/Admin';
import Reservation from './ReservationPage/Components/Reservation';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Joy />
    <Admin />
    <Reservation/>
  </React.StrictMode>
)
