import React from 'react';
import CircleChart1 from '../../components/chart/CircleChart1';
import CircleChart2 from '../../components/chart/CircleChart2';
import LineChart from '../../components/chart/LineChart';
import Calendar from '../../components/calendar/CalendarPicker';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-container">
      <div className="title">
        <h1>Thống kê</h1>
      </div>
      <div className="body-content">
        <div className="body-title">
          <span>Doanh thu</span>
          <Calendar />
        </div>

        <div className="body-line-chart">
          <LineChart />
        </div>

        <div className="total">
          <span>Tổng doanh thu</span>
          <div className="turnover">
            <span>550.000.000 </span>đồng
          </div>
        </div>

        <div className="body-circle-chart">
          <Calendar />
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
