import React, { FC } from 'react';
import { Area } from '@ant-design/plots';

const LineChart: FC = () => {
  const dataValue = [
    { day: '20/06', value: 150000000 },
    { day: '23/06', value: 350000000 },
    { day: '26/06', value: 160000000 },
    { day: '29/06', value: 250000000 },
  ];

  const config = {
    data: dataValue,
    xField: 'day',
    yField: 'value',
    color: '#FAA05F',
    xAxis: {
      range: [0, 1],
    },
    yAxis: {
      range: [0, 1],
    },
    areaStyle: {
      fill: 'l(270) 0:#ffffff 1:#FAA05F',
    },
    smooth: true,
  };

  return <Area {...config} />;
};

export default LineChart;
