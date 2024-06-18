//import React from 'react'
import React, { useState, useEffect } from 'react';
import '../Css/InventoryKitchenStaff.css';

// Sample initial inventory data
const initialInventory = [
  { id: 1, name: 'Tomatoes', quantity: 50, unit: 'kg', threshold: 10, expiry: '2024-07-01' },
  { id: 2, name: 'Cheese', quantity: 20, unit: 'kg', threshold: 5, expiry: '2024-06-25' },
  { id: 3, name: 'Basil', quantity: 5, unit: 'kg', threshold: 2, expiry: '2024-06-20' },
];

const InventoryKitchenStaff = () => {
  const [inventory, setInventory] = useState(initialInventory);

  useEffect(() => {
    // Simulate a real-time update every 10 seconds
    const interval = setInterval(() => {
      // Fetch or simulate inventory update
      console.log('Updating inventory...');
    }, 10000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="inventory-dashboard">
      <h2>Inventory Management</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Expiry</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id} className={item.quantity <= item.threshold ? 'low-stock' : ''}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
              <td>{item.expiry}</td>
              <td className="status">{item.quantity <= item.threshold ? 'Low Stock' : 'In Stock'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};





export default InventoryKitchenStaff