
import React, { useState } from 'react';
import '../Css/DashboardKitchenStaff.css'

// Sample initial data for pre-orders
const initialOrders = [
  { id: 1, customerName: 'Reyol', itemName: 'PizGrilled chiken,Mixed Ice creamza', status: 'pending' },
  { id: 2, customerName: 'Hashini', itemName: 'Chiken Shawarma, Mixed Ice cream', status: 'pending' },
  { id: 3, customerName: 'Beulah', itemName: 'Pasta', status: 'pending' },
  { id: 4, customerName: 'Vithu', itemName: 'Salad', status: 'pending' },
  { id: 5, customerName: 'Miami', itemName: 'Malasala Dhosa,Vadai, Nescafe coffe', status: 'pending' },
  { id: 6, customerName: 'Nithu', itemName: 'Burger', status: 'pending' },
  { id: 7, customerName: 'Prakya', itemName: 'Pasta', status: 'pending' },
  { id: 8, customerName: 'Joy', itemName: 'Chicken Biriyani, Vanila Ice cream', status: 'pending' },
  { id: 9, customerName: 'Kammu', itemName: 'Pizza', status: 'pending' },
  { id: 10, customerName: 'Keerthi', itemName: 'Lawa cake, Chicken Kottu,Fried rice', status: 'pending' },
  { id: 11, customerName: 'Saru', itemName: 'Pasta', status: 'pending' },
  { id: 12, customerName: 'Kavi', itemName: 'SalRed Forest cake, Mixed Ice creamad', status: 'pending' },
  { id: 13, customerName: 'Nilak', itemName: 'Red Forest cake, Mixed Ice cream', status: 'pending' },
  { id: 14, customerName: 'Aji', itemName: 'Burger', status: 'pending' },
  { id: 15, customerName: 'Logi', itemName: 'Pasta', status: 'pending' },
  { id: 16, customerName: 'Sayanthi', itemName: 'Red Forest cake, Mixed Ice cream', status: 'pending' },
  { id: 17, customerName: 'Keerthan', itemName: 'Pizza', status: 'pending' },
  { id: 18, customerName: 'Satalan', itemName: 'Burger', status: 'pending' },
  { id: 19, customerName: 'Chrz', itemName: 'Grilled chiken, Chiken Shawarma', status: 'pending' },
  { id: 20, customerName: 'Mishaf', itemName: 'Salad', status: 'pending' },
  { id: 21, customerName: 'Pirathee', itemName: 'Pizza', status: 'pending' },
  { id: 22, customerName: 'Danee', itemName: 'Grilled chiken, Chiken Shawarma', status: 'pending' }
];

const DashboardKitchenStaff = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleStatusChange = (status) => {
    if (selectedOrder) {
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === selectedOrder.id ? { ...order, status: status } : order
        )
      );
      setSelectedOrder(null); // Close the detail view after updating
    }
  };

  return (
    <>
      {/* <div className="kitchen-dashboard">
    
    <table >
      <thead>
        <tr>
          <th>ID</th>
          <th>Customer Name</th>
          <th>Item Name</th>
          <th>Status</th>
        </tr>
      </thead>
      </table>
      </div> */}
   
    <div className="kitchen-dashboard">
    
      <table >
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
            <tr
              key={order.id}
              className={order.status}
              onClick={() => handleOrderClick(order)}
            >
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.itemName}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
    <div className="order data">
      {selectedOrder && (
        <div className="order-detail">
          <h2>Order Details</h2>
          <p><strong>ID:</strong> {selectedOrder.id}</p>
          <p><strong>Customer Name:</strong> {selectedOrder.customerName}</p>
          <p><strong>Item Name:</strong> {selectedOrder.itemName}</p>
          <p><strong>Status:</strong> {selectedOrder.status}</p>
          <div className="action-buttons">
            <button onClick={() => handleStatusChange('accept')}>Accept</button>
            <button onClick={() => handleStatusChange('cancel')}>Cancel</button>
          </div>
        </div>
      )}
      </div>
    </>
  );
};





export default DashboardKitchenStaff 