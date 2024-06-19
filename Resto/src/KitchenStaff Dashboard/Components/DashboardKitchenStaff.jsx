//import React from 'react'
import React, { useState, useEffect } from 'react';
import '../Css/DashboardKitchenStaff.css'

const initialOrders = [
  { id: 1, customerName: 'Vithu', itemName: 'Grilled chiken,Mixed Ice cream', status: 'pending' },
  { id: 2, customerName: 'Nithu', itemName: 'Chiken Shawarma, Mixed Ice cream', status: 'pending' },
  { id: 3, customerName: 'Beulah', itemName: 'Malasala Dhosa,Vadai, Nescafe coffe', status: 'pending' },
  { id: 4, customerName: 'Keerthi', itemName: 'Chicken Biriyani, Vanila Ice cream', status: 'pending' },
  { id: 5, customerName: 'Reyol', itemName: 'Lawa cake, Chicken Kottu,Fried rice', status: 'pending' },
  { id: 6, customerName: 'Prakya', itemName: 'Red Forest cake, Mixed Ice cream', status: 'pending' },
  { id: 7, customerName: 'Joy', itemName: 'Red Forest cake, Mixed Ice cream', status: 'pending' },
  { id: 8, customerName: 'Kammu', itemName: 'Grilled chiken, Chiken Shawarma', status: 'pending' },
];

const DashboardKitchenStaff = () => {
  const [orders, setOrders] = useState(initialOrders);

  // Simulate real-time status updates
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setOrders((prevOrders) =>
  //       prevOrders.map((order) => {
  //         if (order.status === 'pending') {
  //           const newStatus = Math.random() > 0.5 ? 'accept' : 'cancel';
  //           return { ...order, status: newStatus };
  //         }
  //         return order;
  //       })
  //     );
  //   }, 500); // Update every 5 seconds

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, []);

  return (
    <div className="KitchenStaff-Dashboard">
      <h1>KitchenStaff Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Item Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className={order.status}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.itemName}</td>
              <td className="status">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default DashboardKitchenStaff 