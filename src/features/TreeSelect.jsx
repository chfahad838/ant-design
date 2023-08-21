import React, { useState } from 'react';
import { Tree, Checkbox } from 'antd';
import './ant.scss'
const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-1',
        switcherIcon: <Checkbox />,
      },
      {
        title: 'parent 1-1',
        key: '0-0-2',
        switcherIcon: <Checkbox />,
      },
      {
        title: 'parent 1-2',
        key: '0-0-3',
        switcherIcon: <Checkbox />,
      },
    ],
  },
  {
    title: 'parent 2',
    key: '0-1',
    children: [
      {
        title: 'parent 2-0',
        key: '0-1-0',
        switcherIcon: <Checkbox />,
      },
    ],
  },
  {
    title: 'parent 3',
    key: '0-2',
    switcherIcon: <Checkbox />,
  }
];
const TreeSelect = () => {
  const [showLine, setShowLine] = useState(true);
  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  return (
    <div>
      <div
        style={{
          marginBottom: 16,
        }}
      >
      </div>
      <Tree
        showLine={
          showLine
            ? {
                setShowLine,
              }
            : false
        }
        style={{display: "flex", flexDirection: "row-reverse"}}
        defaultExpandedKeys={['0-0-0']}
        onSelect={onSelect}
        treeData={treeData}
      />
    </div>
  );
};
export default TreeSelect;