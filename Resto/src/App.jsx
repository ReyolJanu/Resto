import React from 'react'
import Admin from './AdminDashboard/Components/Admin'
 import Host from './HostDashboard/Componenets/Host'
import Reservation from './ReservationPage/Components/Reservation'
import KitchenStaff from './KitchenStaff Dashboard/Components/KitchenStaff'
import { Customer } from './Customer Dashboard/Components/Customer'
import NewLandingpage from './LandingPage/NewLandingpage'

export const App = () => {
  return (
    <>
      {/* <NewLandingpage /> 
      <Admin/>
      <Joy/>
      <Reservation/>
      
      <Customer/>
      <Host/>  */}
      <KitchenStaff/>
    </>
  )
}
