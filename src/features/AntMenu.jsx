import React from "react";
import "./ant.scss";
import { Menu, Checkbox } from "antd";
import { PlusOutlined, PlusSquareOutlined  } from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Navigation One", "main1", null, [
    getItem("Parent 1", "sub1",<PlusSquareOutlined />, [
      getItem("Option 1", "1", <Checkbox />),
      getItem("Option 2", "2", <Checkbox />),
      getItem("Option 3", "3", <Checkbox />),
    ]),
    getItem("Parent 2", "sub2",<PlusSquareOutlined />, [
      getItem("Option 4", "4", <Checkbox />),
      getItem("Option 5", "5", <Checkbox />),
      getItem("Option 6", "6", <Checkbox />),
    ]),
  ]),
];
const AntMenu = () => {
  return (
    <div>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["main1"]}
        mode="inline"
        theme="dark"
        items={items}
      />
    </div>
  );
};
export default AntMenu;
