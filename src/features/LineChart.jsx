import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const series = [
    {
      data: [115, 110, 115, 130, 150, 140, 125, 120, 130, 140, 150, 130, 120],
    },
  ];

  const options = {
    chart: {
      height: 350,
      background: "#F9FBFC",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
      },
    },                 
    colors: [
      "#D0D5DD",
      "#D0D5DD",
      "#D0D5DD",
      "#D0D5DD",
      "#D0D5DD",
      "#D0D5DD",
      "#FDB022",
      "#FDB022",
      "#FDB022",
      "#D0D5DD",
      "#D0D5DD",
      "#D0D5DD",
      "#D0D5DD",
    ],
    stroke: {
      width: [0],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    labels: [
      "01 Jan 2001",
      "02 Jan 2001",
      "03 Jan 2001",
      "04 Jan 2001",
      "05 Jan 2001",
      "06 Jan 2001",
      "07 Jan 2001",
      "08 Jan 2001",
      "09 Jan 2001",
      "10 Jan 2001",
      "11 Jan 2001",
      "12 Jan 2001",
      "13 Jan 2001",
    ],
    xaxis: {
      type: "datetime",
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    legend: {
        show: false,
      },
  };
  return (
    <ReactApexChart
      options={options}
      series={series}
      height={150}
      width={"400px"}
      type="bar"
    />
  );
};

export default LineChart;
