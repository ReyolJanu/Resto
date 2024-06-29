import React from 'react'
import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill,BsPersonCircle } from 'react-icons/bs'

function Sidebar() {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
        <BsPersonCircle className='icon'/>Admin
        </div>
        <span className='icon close_icon'>X</span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className='icon'/> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillArchiveFill className='icon'/> Restaurants
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className='icon'/> Customers
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className='icon'/> Notification
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className='icon'/> Reservations
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className='icon'/> Settings
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar