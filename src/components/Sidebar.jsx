
import React from 'react';
import './Sidebar.css';
import { useStateValue } from '../StateProvider';

const Sidebar = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="sidebar">
      <div className="sidebarRow">
        <img
          className="user__avatar"
          src={user.photoURL}
          alt={user.displayName}
        />
        <h4>{user.displayName}</h4>
      </div>

      <div className="sidebarRow">
        <span className="material-icons"> local_hospital </span>
        <h4>COVID-19 Information Center</h4>
      </div>

      <div className="sidebarRow">
        <span className="material-icons"> emoji_flags </span>
        <h4>Pages</h4>
      </div>

      <div className="sidebarRow">
        <span className="material-icons"> people </span>
        <h4>Friends</h4>
      </div>

      <div className="sidebarRow">
        <span className="material-icons"> chat </span>
        <h4>Messenger</h4>
      </div>

      <div className="sidebarRow">
        <span className="material-icons"> store </span>
        <h4>Marketplace</h4>
      </div>

      <div className="sidebarRow">
        <span className="material-icons"> video_library </span>
        <h4>Videos</h4>
      </div>

      <div className="sidebarRow">
        <span className="material-icons"> expand_more </span>
        <h4>Marketplace</h4>
      </div>
    </div>
  );
};

export default Sidebar;
