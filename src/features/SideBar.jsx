import React from "react";
import { Button, Drawer } from "antd";
import "./ant.scss";
import AntMenu from "./AntMenu";

const SideBar = ({ open, onClose, open2, onClose2, btnClick, drawerTwo }) => {
  return (
    <Drawer
      title="Multi-level drawer"
      closable={true}
      onClose={onClose}
      open={open}
    >
      <AntMenu />
      {drawerTwo && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // height: "100%",
          }}
        >
          <Button
            type="primary"
            style={{ backgroundColor: "ActiveBorder" }}
            onClick={btnClick}
          >
            Two-level drawer
          </Button>
          <Drawer
            title="Two-level Drawer"
            closable={true}
            onClose={onClose2}
            open={open2}
          >
            This is two-level drawer
          </Drawer>
        </div>
      )}
    </Drawer>
  );
};

export default SideBar;
