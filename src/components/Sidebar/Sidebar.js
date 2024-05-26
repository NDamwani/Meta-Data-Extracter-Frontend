import React from "react";
import { AlignJustify, RotateCw, Layers, GitBranch } from "react-feather";
import "./Sidebar.css"; 
import { useSelector } from 'react-redux';

function Sidebar() {
    // const isDatabaseMocked = useSelector(state=>state.isDatabseMocked);
    const database=useSelector(state=>state.database);
    const isDatabaseMocked = database.isDatabaseMocked;
    console.log("first",isDatabaseMocked )
  return (
    <div className="sidebar">
      <div className="menu-item">
        <AlignJustify />
      </div>
      <div className="menu-item">
        <RotateCw />
      </div>
      <div className="menu-item">
      <Layers color={isDatabaseMocked ? 'white' : 'grey'} />
      </div>
      <div className="menu-item">
        <GitBranch />
      </div>
    </div>
  );
}

export default Sidebar;
