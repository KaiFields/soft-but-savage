
import React from 'react';

const Notifications = ({ notifications }) => {
  return (
    <div style={{ position: 'fixed', top: '10px', right: '10px', zIndex: 1000 }}>
      {notifications.map(notification => (
        <div key={notification.id} style={{ backgroundColor: '#f0f0f0', padding: '10px', margin: '5px', borderRadius: '5px' }}>
          {notification.message}
        </div>
      ))}
    </div>
  );
};

export default Notifications;
