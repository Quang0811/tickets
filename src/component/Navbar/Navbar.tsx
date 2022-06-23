import React from 'react';
import './Navbar.scss';
import avata from '../../assets/images/avata.png';

const Navbar = () => {
  return (
    <div>
      <div className="nav-container">
        <div className="search">
          <input type="text" placeholder="Search" />
          <i className="bi bi-search"></i>
        </div>
        <div className="contact">
          <i className="bi bi-envelope"></i>
          <i className="bi bi-bell"></i>
          <div className="image-user"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
