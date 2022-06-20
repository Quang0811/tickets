import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Popover, Table } from 'antd';
import moment from 'moment';

const ComboEvent = () => {
  return (
    <div className="body-content">
      <div className="body-title">
        <div className="search">
          <input type="text" placeholder="Tìm bằng số vé" />
          <i className="fas fa-search"></i>
        </div>
        <div className="filter-container">
          <div className="filter">
            <i className="fas fa-filter"></i>Lọc
          </div>

          <div className="export">Xuất file(.csv)</div>
        </div>
      </div>
      <div className="body-table">
        {}
        <Table
          pagination={{ pageSize: 8, position: ['bottomCenter'] }}
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
            title="Booking Code"
            dataIndex="bookingcode"
            key="bookingcode"
            render={(text: any) => <div>{text}</div>}
          />

          <Table.Column
            title="Số vé"
            dataIndex="ticketId"
            key="ticketId"
            render={(text: any) => <div>{text}</div>}
          />

          <Table.Column
            title="Tình trạng sử dụng"
            dataIndex="status"
            key="status"
            render={(text: any) => (
              <div
                className={
                  text && text === 'Chưa sử dụng'
                    ? 'unused'
                    : text === 'Đã sử dụng'
                    ? 'used'
                    : 'expired'
                }
              >
                <i className="fas fa-circle"></i>
                {text}
              </div>
            )}
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
            title="Ngày xuất vé"
            dataIndex="ticketReleaseDate"
            key="ticketReleaseDate"
            render={(text: any) => (
              <div>{moment(text.toDate()).format('DD/MM/YYYY')}</div>
            )}
          />

          <Table.Column
            title="Cổng Check-in"
            dataIndex="checkin"
            key="checkin"
            render={(text: any) => <div>{text}</div>}
          />

          <Table.Column
            key="id"
            dataIndex="status"
            render={(text: any, item: any) => (
              <div>
                {text && text === 'Chưa sử dụng' ? (
                  <Popover
                    trigger="click"
                    placement="left"
                    overlayInnerStyle={{
                      background: '#ffd2a8',
                      borderRadius: '8px',
                      width: '159px',
                      height: '59px',
                    }}
                  >
                    <>
                      <i className="fas fa-ellipsis-v"></i>
                    </>
                  </Popover>
                ) : (
                  ''
                )}
              </div>
            )}
          />
        </Table>
      </div>
    </div>
  );
};

export default ComboEvent;
