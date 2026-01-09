import React from 'react';
import './Header.css';
import { useStateValue } from '../StateProvider';

const Header = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="/logo.png"
          alt="Facebook logo"
        />
        <div className="header__input">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__middle">
        <div className="header__option header__option--active">
          <span className="material-icons"> home </span>
        </div>
        <div className="header__option">
          <span className="material-icons"> flag </span>
        </div>
        <div className="header__option">
          <span className="material-icons"> subscriptions </span>
        </div>
        <div className="header__option">
          <span className="material-icons"> store </span>
        </div>
        <div className="header__option">
          <span className="material-icons"> supervised_user_circle </span>
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <img
            className="user__avatar"
            src={user.photoURL}
            alt="User avatar"
          />
          <h4>{user.displayName}</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
