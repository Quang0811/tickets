import React from 'react';
import './Header.scss';
import Menu from './Menu/Menu';
import Navbar from './Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import CheckTickets from '../pages/CheckTickets/CheckTickets';
import Home from '../pages/Home/Home';
import TicketManage from '../pages/TicketManage/TicketManage';
import Service from '../pages/Service/Service';

const Header = () => {
  return (
    <div className="header-container">
      <div className="content-left">
        <Menu />
      </div>
      <div className="content-right">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ticket-manage" element={<TicketManage />} />
          <Route path="/check-tickets" element={<CheckTickets />} />
          <Route path="/setting/service" element={<Service />} />
        </Routes>
      </div>
    </div>
  );
};

export default Header;
