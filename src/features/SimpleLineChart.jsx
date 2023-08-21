import React from "react";
import ApexCharts from "react-apexcharts";

const SimpleLineChart = () => {
  const series = [
    {
      data: [
        [new Date("2023-01-01").getTime(), 0.2],
        [new Date("2023-02-01").getTime(), 0.4],
        [new Date("2023-03-03").getTime(), 0.6],
        [new Date("2023-04-04").getTime(), 0.8],
        [new Date("2023-05-04").getTime(), 0.6],
        [new Date("2023-06-04").getTime(), 0.4],
        [new Date("2023-07-04").getTime(), 1],
        [new Date("2023-08-04").getTime(), 0.4],
        [new Date("2023-09-04").getTime(), 0.6],
        [new Date("2023-10-04").getTime(), 0.6],
        [new Date("2023-11-04").getTime(), 0.4],
        [new Date("2023-12-05").getTime(), 0.4],
      ],
    },
  ];

  const options = {
    series: [
      {
        data: [0.2, 0.4, 0.6, 0.8, 1],
      },
    ],
    chart: {
      type: "area",
      height: 350,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      background: "#F9FBFC",
    },
    colors: ["#fff"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Fundamental Analysis of Stocks",
      align: "left",
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeUTC: false,
        format: "MMM",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 10, 100],
      },
      colors: ["#4E70F5"],
    },
    grid: {
      show: false,
    },
  };

  return (
    <ApexCharts
      type="area"
      width={700}
      options={options}
      series={series}
      height={300}
    />
  );
};

export default SimpleLineChart;
