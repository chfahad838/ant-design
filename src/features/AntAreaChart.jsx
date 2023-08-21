import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';

const AntAreaChart = () => {

    const data = [
        {
          "timePeriod": "Dec 22nd, 2022",
          "value": '0%'
        },
        {
          "timePeriod": "2006 Q",
          "value": '0%'
        },
        {
          "timePeriod": "2007 Q0",
          "value": '25%'
        },
        {
          "timePeriod": "2007 Q1",
          "value": '0%'
        },
        {
          "timePeriod": "2007 Q2",
          "value": '50%'
        },
        {
          "timePeriod": "2007 Q3",
          "value": '0%'
        },
        {
          "timePeriod": "2007 Q4",
          "value": '75%'
        },
        {
          "timePeriod": "2007 Q5",
          "value": '0%'
        },
        {
          "timePeriod": "2007 Q6",
          "value": '100%'
        },
        {
          "timePeriod": "Mar 22nd, 2023",
          "value": '0%'
        },
        {
          "timePeriod": "Mar 23nd, 2023",
          "value": '0%'
        },
    ]
  const config = {
    data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
    geometryOptions: [
        {
          geometry: "area",
          isGroup: true,
          color: ["#7CD4FD"],
        },
      ],
  };

  return(
  <Area {...config} style={{width: '700px'}} />
  );
};

export default AntAreaChart