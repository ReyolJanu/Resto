import React from 'react';
import ReactDOM from 'react-dom/client';
import { Joy } from './LandingPage/Components/Joy';
import Admin from './AdminDashboard/Components/Admin';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Joy />
    <Admin />
  </React.StrictMode>
)
