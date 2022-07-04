import React from 'react';
import {
  Checkbox,
  TimePicker,
  DatePicker,
  Select,
  Modal,
  Button,
  Row,
  Col,
  Form,
} from 'antd';
import CircleChart1 from '../../container/chart/CircleChart1';
import CircleChart2 from '../../container/chart/CircleChart2';
import LineChart from '../../container/chart/LineChart';
import './Home.scss';
import CalendarPicker from '../../container/calendar/CalendarPicker';

const Home = () => {
  return (
    <div className="home-container">
      <div className="title">
        <h1>Thống kê</h1>
      </div>
      <div className="body-content">
        <div className="body-title">
          <span>Doanh thu</span>
          <Col span={5}>
            {/* <DatePicker format="DD/MM/YYYY" /> */}
            <CalendarPicker />
          </Col>
        </div>

        <div className="body-line-chart">
          <LineChart />
        </div>

        <div className="total">
          <span>Tổng doanh thu</span>
          <div className="turnover">
            <span>525.145.000 </span>đồng
          </div>
        </div>

        <div className="body-circle-chart">
          <Col span={5}>
            <CalendarPicker />
          </Col>
          <div className="circle1">
            <div>Gói gia đình</div>
            <CircleChart1 />
          </div>
          <div className="circle2">
            <div>Gói sự kiện</div>
            <CircleChart2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
