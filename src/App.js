import React from "react";
import AntDesign from "./features/AntDesign";
import { ApexPieChart } from "./features/ApaxPieChart";
import ApaxBarChart from "./features/ApaxBarChart";
import SideBarChart from "./features/SideBarChart";
import SimplePieChart from "./features/SimplePieChart";
import SimpleLineChart from "./features/SimpleLineChart";
import LineChart from "./features/LineChart";
import MultiBarChart from './features/MultiBarChart'
import AntAreaChart from './features/AntAreaChart'
import SearchFun from './features/SearchFun'

function App() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "4rem 0",
        gap: "2rem",
      }}
    >
      <SimplePieChart />
      <ApexPieChart />
      <ApaxBarChart />
      <SideBarChart />
      <AntDesign />
      <SimpleLineChart />
      <LineChart />
      <MultiBarChart />
      <AntAreaChart />
      <SearchFun/>
    </div>
  );
}

export default App;
