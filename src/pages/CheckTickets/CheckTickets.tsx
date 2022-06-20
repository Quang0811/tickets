import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './CheckTickets.scss';
import { Radio, Space, Table } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import DayPicker from '../../components/calendar/DayPicker';

const CheckTickets = () => {
  return (
    <div className="container-content">
      <div className="content-left">
        <div className="title">
          <h1>Đối soát vé</h1>
        </div>
        <div className="body-content">
          <div className="body-title">
            <div className="search">
              <input type="text" placeholder="Tìm bằng số vé" />
              <i className="fas fa-search"></i>
            </div>
            <div></div>
          </div>
          <div className="body-table">
            {}
            <Table
              pagination={{ pageSize: 12, position: ['bottomCenter'] }}
              rowKey="id"
            >
              <Table.Column
                title="STT"
                dataIndex="id"
                key="id"
                render={(text: any, record: any, index: any) => (
                  <div>{index + 1}</div>
                )}
              />

              <Table.Column
                title="Số vé"
                dataIndex="ticketId"
                key="ticketId"
                render={(text: any) => <div>{text}</div>}
              />

              <Table.Column
                title="Ngày sử dụng"
                dataIndex="ticketDate"
                key="ticketDate"
                render={(text: any) => (
                  <div>{moment(text.toDate()).format('DD/MM/YYYY')}</div>
                )}
              />

              <Table.Column
                title="Tên loại"
                dataIndex="type"
                key="type"
                render={(text: any) => <div>{text}</div>}
              />

              <Table.Column
                title="Cổng Check-in"
                dataIndex="checkin"
                key="checkin"
                render={(text: any) => <div>{text}</div>}
              />

              <Table.Column
                dataIndex="control"
                key="control"
                render={(text: any) => (
                  <div
                    className={
                      text && text === 'Chưa đối soát' ? 'grey' : 'red'
                    }
                  >
                    {text}
                  </div>
                )}
              />
            </Table>
          </div>
        </div>
      </div>
      <div className="content-right">
        <div className="title">Lọc vé</div>
        <div className="status">
          <div className="status-title">Tình trạng đối soát</div>
          <div className="status-radio">
            <Radio.Group>
              <Space direction="vertical">
                <Radio value="">Tất cả</Radio>
                <Radio value="Chưa đối soát">Chưa đối soát</Radio>
                <Radio value="Đã đối soát">Đã đối soát</Radio>
              </Space>
            </Radio.Group>
          </div>
        </div>
        <div className="type-ticket">
          <div className="type-title">Loại vé</div>
          <div className="type">Vé cổng</div>
        </div>
        <div className="day-picker">
          <div className="current">
            <div className="day-title">Từ ngày</div>
            <DayPicker />
          </div>
          <div className="current">
            <div className="day-title">Đến ngày</div>
            <DayPicker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckTickets;
