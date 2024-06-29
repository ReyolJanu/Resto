// NotificationItem.js
import React from 'react';
import '../Css/NotificationItem.css';

const NotificationItem = ({ notification, onForward }) => {
  return (
    <div className={`notification-item ${notification.status}`}>
      <p>{notification.message}</p>
      {notification.status === 'pending' && (
        <button onClick={() => onForward(notification.id)}>Forward to Host</button>
      )}
      {notification.status === 'forwarded' && <span>Forwarded to Host</span>}
    </div>
  );
};

export default NotificationItem;
