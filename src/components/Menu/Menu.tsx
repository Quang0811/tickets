import React from 'react';
import './Menu.scss';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu-content">
        <ul>
          <li>
            <NavLink to="/">
              <i className="fas fa-home"></i>
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/ticket-manage">
              <i className="fas fa-ticket-alt"></i>
              Quản lý vé
            </NavLink>
          </li>
          <li>
            <NavLink to="/check-tickets">
              <i className="fas fa-bars"></i>
              Đối soát vé
            </NavLink>
          </li>
          <li>
            <NavLink to="/setting/service">
              <i className="fas fa-cog"></i>
              Cài đặt
            </NavLink>
            <ul className="sub-menu">
              <li>
                <Link to="/setting/service">Gói dịch vụ</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
