import React, { useState } from 'react';
import { Button } from 'antd';
import SideBar from './SideBar';
// import PieChart from './PieChart'

const AntDesign = () => {
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };                                              

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: 'column', gap: "3rem"}}>
      <Button type="primary" onClick={showDrawer} style={{backgroundColor: "black"}}>
        Open drawer
      </Button>
      {/* <PieChart/> */}
      <SideBar
      open={open}
      onClose={closeDrawer}
      open2={childrenDrawer}
      onClose2={onChildrenDrawerClose}
      btnClick={showChildrenDrawer}
      // drawerTwo
      />
    </div>
  );
};

export default AntDesign;