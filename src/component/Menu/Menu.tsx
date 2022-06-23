import React from 'react';
import './Menu.scss';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Menu = () => {
  const navigate = useNavigate();
  const returnHome = () => {
    if (navigate) {
      navigate('/');
    }
  };

  return (
    <div className="menu-container">
      <div className="menu-logo">
        <img src={logo} onClick={() => returnHome()} />
      </div>
      <div className="menu-content">
        <ul>
          <li>
            <NavLink to="/">
              <i className="bi bi-house-door"></i>
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/ticket-manage">
              <i className="bi bi-ticket-perforated"></i>
              Quản lý vé
            </NavLink>
          </li>
          <li>
            <NavLink to="/checking-ticket">
              <i className="bi bi-card-list"></i>
              Đối soát vé
            </NavLink>
          </li>
          <li>
            <NavLink to="/setting/service">
              <i className="bi bi-gear"></i>
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
