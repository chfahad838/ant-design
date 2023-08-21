import React from "react";
import ApexCharts from "react-apexcharts";

const BarChart = () => {
  const options = {
    series: [
      {
        name: "PRODUCT A",
        data: [44, 55, 41, 67, 43, 43, 45],
      },
      {
        name: "PRODUCT B",
        data: [44, 55, 20, 30, 30, 30, 45],
      },
    ],
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: ["#7A5AF8", "#F4F3FF"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        columnWidth: '50px',
        horizontal: false,
        borderRadius: 10,
        borderRadiusWhenStacked: 'top',
        borderRadiusApplication: 'around',
        dataLabels: {
          total: {
            enabled: false,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "03/05/2011 GMT",
        "03/06/2011 GMT",
        "03/07/2011 GMT",
        "03/08/2011 GMT",
        "03/09/2011 GMT",
        "03/10/2011 GMT",
        "03/11/2011 GMT",
      ],
      axisBorder: {
        show: false,
      }
    },
    legend: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      // padding: {
      //   left: 10,
      //   right: 10,
      // },
    },
  };

  return (
    <ApexCharts
      width={"1500px"}
      options={options}
      series={options.series}
      type="bar"
      height={350}
    />
  );
};

export default BarChart;
