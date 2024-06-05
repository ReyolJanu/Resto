import React from 'react'
import Admin from './AdminDashboard/Components/Admin'
import Host from './HostDashboard/Componenets/Host'
import { Joy } from './LandingPage/Components/Joy'
import Reservation from './ReservationPage/Components/Reservation'
import KitchenStaff from './KitchenStaff Dashboard/Components/KitchenStaff'
import { Customer } from './Customer Dashboard/Components/Customer'

export const App = () => {
  return (
    <>
      <Admin/>
      <Joy/>
      <Reservation/>
      <KitchenStaff/>
      <Customer/>
      <Host/>
    </>
  )
}
