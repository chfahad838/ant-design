import React from "react";
import ApexCharts from "react-apexcharts";

const SideBarChart = () => {
  const series = [
    {
      data: [8, 2.5, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1],
    },
  ];
  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    colors: ["#7A5AF8"],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
        colors: { backgroundBarColors: ["#F4F3FF"] },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Marketing",
        "3rd Party Boards",
        "Agencies",
        "Events",
        "Mo Source",
        "Other",
        "Prospecting",
        "Raferral",
        "Social Media",
      ],
    },
  };

  return (
    <ApexCharts
      width={"700px"}
      options={options}
      series={series}
      type="bar"
      height={350}
    />
  );
};

export default SideBarChart;
