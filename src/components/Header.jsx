
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt="Facebook logo"
        />
        <div className="header__input">
          <span className="material-icons"> search </span>
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
          <span className="material-icons"> supervied_user_circle </span>
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <img
            className="user__avatar"
            src="https://avatars.githubusercontent.com/u/1234567?v=4"
            alt="User avatar"
          />
          <h4>Guest</h4>
        </div>
      </div>
    </div>
  );
};

export default Header;
