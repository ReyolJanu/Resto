// NotificationList.js
import React, { useState } from 'react';
import '../Css/Notification.css';
import NotificationItem from './NotificationItem';

const Notification = () => {
  // Sample notifications data
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Order #1234: Spaghetti Bolognese', status: 'pending' },
    { id: 2, message: 'Order #1235: Vegan Salad', status: 'pending' },
    { id: 3, message: 'Order #1236: Grilled Chicken', status: 'forwarded' }
  ]);

  // Function to handle forwarding a notification
  const forwardNotification = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, status: 'forwarded' } : notif
    ));
  };

  return (
    <div className="notification-list">
      <h2>Kitchen Staff - Food Order Notifications</h2>
      {notifications.map(notification => (
        <NotificationItem 
          key={notification.id} 
          notification={notification} 
          onForward={forwardNotification} 
        />
      ))}
    </div>
  );
};



export default Notification;
