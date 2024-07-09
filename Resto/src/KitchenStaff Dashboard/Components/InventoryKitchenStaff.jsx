//import React from 'react'
import React, { useState, useEffect } from 'react';
import '../Css/InventoryKitchenStaff.css';

// Sample initial inventory data
const initialInventory = [
  { id: 1, name: 'Tomatoes', quantity: 50, unit: 'kg', threshold: 20, expiry: '2024-07-01' },
  { id: 2, name: 'Cheese', quantity: 20, unit: 'kg', threshold: 5, expiry: '2024-06-25' },
  { id: 3, name: 'Basil', quantity: 5, unit: 'kg', threshold: 2, expiry: '2024-06-20' },
  { id: 4, name: 'Tomatoes', quantity: 50, unit: 'kg', threshold: 10, expiry: '2024-07-01' },
  { id: 5, name: 'Cheese', quantity: 20, unit: 'kg', threshold: 53, expiry: '2024-06-25' },
  { id: 6, name: 'Basil', quantity: 5, unit: 'kg', threshold: 2, expiry: '2024-06-20' },
  { id: 7, name: 'Tomatoes', quantity: 50, unit: 'kg', threshold: 10, expiry: '2024-07-01' },
  { id: 8, name: 'Cheese', quantity: 20, unit: 'kg', threshold: 5, expiry: '2024-06-25' },
  { id: 9, name: 'Basil', quantity: 5, unit: 'kg', threshold: 22, expiry: '2024-06-20' },
  { id: 10, name: 'Tomatoes', quantity: 50, unit: 'kg', threshold: 20, expiry: '2024-07-01' },
  { id: 11, name: 'Cheese', quantity: 20, unit: 'kg', threshold: 5, expiry: '2024-06-25' },
  { id: 12, name: 'Basil', quantity: 5, unit: 'kg', threshold: 2, expiry: '2024-06-20' },
  { id: 13, name: 'Tomatoes', quantity: 50, unit: 'kg', threshold: 10, expiry: '2024-07-01' },
  { id: 14, name: 'Cheese', quantity: 20, unit: 'kg', threshold: 53, expiry: '2024-06-25' },
  { id: 15, name: 'Basil', quantity: 5, unit: 'kg', threshold: 2, expiry: '2024-06-20' },
  { id: 16, name: 'Tomatoes', quantity: 50, unit: 'kg', threshold: 10, expiry: '2024-07-01' },
  { id: 17, name: 'Cheese', quantity: 20, unit: 'kg', threshold: 5, expiry: '2024-06-25' },
  { id: 18, name: 'Basil', quantity: 5, unit: 'kg', threshold: 22, expiry: '2024-06-20' },
  { id: 19, name: 'Tomatoes', quantity: 50, unit: 'kg', threshold: 20, expiry: '2024-07-01' },
  { id: 20, name: 'Cheese', quantity: 20, unit: 'kg', threshold: 5, expiry: '2024-06-25' },
  { id: 21, name: 'Basil', quantity: 5, unit: 'kg', threshold: 2, expiry: '2024-06-20' },
  { id: 22, name: 'Tomatoes', quantity: 50, unit: 'kg', threshold: 10, expiry: '2024-07-01' },
  { id: 23, name: 'Cheese', quantity: 20, unit: 'kg', threshold: 53, expiry: '2024-06-25' },
  { id: 24, name: 'Basil', quantity: 5, unit: 'kg', threshold: 2, expiry: '2024-06-20' },
  { id: 25, name: 'Tomatoes', quantity: 50, unit: 'kg', threshold: 10, expiry: '2024-07-01' },
  { id: 26, name: 'Cheese', quantity: 20, unit: 'kg', threshold: 5, expiry: '2024-06-25' },
  { id: 27, name: 'Basil', quantity: 5, unit: 'kg', threshold: 22, expiry: '2024-06-20' },
];

const InventoryKitchenStaff = () => {
  const [inventory, setInventory] = useState(initialInventory);

  //  useEffect(() => {
  //    // Simulate a real-time update every 10 seconds
  //    const interval = setInterval(() => {
  //      // Fetch or simulate inventory update
  //      console.log('Updating inventory...');
  //    }, 1000);

  //    return () => clearInterval(interval); // Cleanup interval on component unmount
  //  }, []);

  return (
<>

    <div className="K-Staff-h1"> <h1>Inventory Management</h1> </div>
    <div className="K-Staff-inventory-dashboard">
      
      <table className='K-Staff-table'>
        <thead className='K-Staff-thead' >
          <tr className='K-Staff-thead-tr'>
            <th>ID</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Expiry</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className='K-Staff-tbody'>
          {inventory.map((item) => (
            <tr key={item.id} className={item.quantity <= item.threshold ? 'K-Staff-low-stock' : ''}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.unit}</td>
              <td>{item.expiry}</td>
              <td className="K-Staff-status">{item.quantity <= item.threshold ? 'Low Stock' : 'In Stock'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </>
  );
};





export default InventoryKitchenStaff