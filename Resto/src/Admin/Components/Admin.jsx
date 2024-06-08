import React from 'react'
import '../Css/Admin.css'
import {useState} from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

function Admin() {
  return (
    <>
      <div className="grid-container">
        <Header/>
        <Sidebar/>
        <Home/>
      </div>
    </>
  )
}

export default Admin