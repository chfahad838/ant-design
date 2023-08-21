import React from "react";
import { DualAxes } from "@ant-design/plots";

const DemoDualAxes = () => {
  const uvBillData = [
    {
      time: "Jan",
      value: 90,
      type: "Upward Reviews",
    },
    {
      time: "Feb",
      value: 40,
      type: "Upward Reviews",
    },
    {
      time: "Mar",
      value: 50,
      type: "Upward Reviews",
    },
    {
      time: "Apr",
      value: 80,
      type: "Upward Reviews",
    },
    {
      time: "May",
      value: 50,
      type: "Upward Reviews",
    },
    {
      time: "Jun",
      value: 70,
      type: "Upward Reviews",
    },
    {
      time: "Jul",
      value: 59,
      type: "Upward Reviews",
    },
    {
      time: "Aug",
      value: 88,
      type: "Upward Reviews",
    },
    {
      time: "Sept",
      value: 65,
      type: "Upward Reviews",
    },
    {
      time: "Oct",
      value: 75,
      type: "Upward Reviews",
    },
    {
      time: "Nov",
      value: 60,
      type: "Upward Reviews",
    },
    {
      time: "Dec",
      value: 90,
      type: "Upward Reviews",
    },
    {
      time: "Jan",
      value: 70,
      type: "Downward Review",
    },
    {
      time: "Feb",
      value: 100,
      type: "Downward Review",
    },
    {
      time: "Mar",
      value: 80,
      type: "Downward Review",
    },
    {
      time: "Apr",
      value: 40,
      type: "Downward Review",
    },
    {
      time: "May",
      value: 70,
      type: "Downward Review",
    },
    {
      time: "Jun",
      value: 25,
      type: "Downward Review",
    },
    {
      time: "Jul",
      value: 45,
      type: "Downward Review",
    },
    {
      time: "Aug",
      value: 35,
      type: "Downward Review",
    },
    {
      time: "Sept",
      value: 70,
      type: "Downward Review",
    },
    {
      time: "Oct",
      value: 55,
      type: "Downward Review",
    },
    {
      time: "Nov",
      value: 60,
      type: "Downward Review",
    },
    {
      time: "Dec",
      value: 80,
      type: "Downward Review",
    },
    {
      time: "Jan",
      value: 75,
      type: "Self Review",
    },
    {
      time: "Feb",
      value: 66,
      type: "Self Review",
    },
    {
      time: "Mar",
      value: 88,
      type: "Self Review",
    },
    {
      time: "Apr",
      value: 55,
      type: "Self Review",
    },
    {
      time: "May",
      value: 30,
      type: "Self Review",
    },
    {
      time: "Jun",
      value: 12,
      type: "Self Review",
    },
    {
      time: "Jul",
      value: 48,
      type: "Self Review",
    },
    {
      time: "Aug",
      value: 39,
      type: "Self Review",
    },
    {
      time: "Sept",
      value: 30,
      type: "Self Review",
    },
    {
      time: "Oct",
      value: 20,
      type: "Self Review",
    },
    {
      time: "Nov",
      value: 60,
      type: "Self Review",
    },
    {
      time: "Dec",
      value: 40,
      type: "Self Review",
    },
  ];
  const config = {
    data: [uvBillData, 0],
    xField: "time",
    yField: ["value", "type"],
    geometryOptions: [
      {
        geometry: "column",
        isGroup: true,
        seriesField: "type",
        columnWidthRatio: 0.4,
        columnStyle: {
          radius: [10, 10, 0, 0],
        },
        marginRatio: 0.5,
        color: ["#7CD4FD", "#9B8AFB", "#4E5BA6"],
      },
    ],
    legend: {
      position: "top-right",
    },
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          margin: 0
        }}
      >
        <h4 style={{ transform: "rotate(-90deg)" }}>No. of Reviews</h4>
        <div>
          <h2 style={{ marginBottom: "-18px" }}>Reviews</h2>
          <DualAxes {...config} style={{width: "700px"}}/>
        </div>
      </div>
    </>
  );
};

export default DemoDualAxes;
