import React, { useState } from 'react';
import { Tabs } from 'antd';
import './TicketManage.scss';
import ComboFamily from '../../components/combo/ComboFamily';
import ComboEvent from '../../components/combo/ComboEvent';

const TicketManage = () => {
  return (
    <div className="home-container">
      <div className="title">
        <h1>Danh sách vé</h1>
      </div>
      <div className="nav">
        <ComboEvent />
      </div>

      <div className="foot-content"></div>
    </div>
  );
};

export default TicketManage;
