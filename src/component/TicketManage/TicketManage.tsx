import React, { useState } from 'react';
import './TicketManage.scss';
import ComboEvent from '../../container/combo/ComboEvent';

const TicketManage = () => {
  return (
    <div className="home-container">
      <div className="title">
        <h1>Danh sách vé</h1>
      </div>
      <ComboEvent />

      <div className="foot-content"></div>
    </div>
  );
};

export default TicketManage;
