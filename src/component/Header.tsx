import React from 'react';
import './Header.scss';
import Menu from './Menu/Menu';
import Navbar from './Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import CheckingTicket from './CheckingTicket/CheckingTicket';
import TicketManage from './TicketManage/TicketManage';
import Service from './Service/Service';

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
          <Route path="/checking-ticket" element={<CheckingTicket />} />
          <Route path="/setting/service" element={<Service />} />
        </Routes>
      </div>
    </div>
  );
};

export default Header;
