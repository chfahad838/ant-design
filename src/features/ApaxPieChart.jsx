import React from "react";
import ReactApexChart from "react-apexcharts";

const series = [80, 75, 70, 65, 60, 55];
const options = {
  chart: {
    height: 350,
    type: "radialBar",
  },
  legend: {
    show: true,
    formatter: function (seriesName, opts) {
      return `<div style="margin-left:5px;display:flex; width:252px; justify-content:space-between; font-family: 'Open Sans', sans-serif;font-size: 14px;">
              <div>
                ${seriesName}
              </div>
              <div style="font-weight:600;color:#101828">
                ${opts.w.globals.series[opts.seriesIndex]}
              </div>
            </div>`;
    },
  },
  colors: ["#FEA3B4", "#4E5BA6", "#6172F3", "#EE46BC", "#F79009", "#12B76A"],
  labels: [
    "Goals Achieved",
    "Scheduled Goals",
    "Assigned Goals",
    "Unassigned Goals",
    "On Track Goals",
    "Off Track Goals",
  ],
  plotOptions: {
    radialBar: {
      hollow: {
        size: "25%",
      },
      track: {
        background: "#EBE9FE",
      },
      dataLabels: {
        show: false,
      },
    },
  },
};
export const ApexPieChart = () => {
  return (
    <ReactApexChart
      options={options}
      series={series}
      type="radialBar"
      height={200}
      width={"600px"}
    />
  );
};
