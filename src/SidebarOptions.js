import React from "react";
import "./SidebarOption.css";

function SidebarOptions({Icon, title, number, selected}) {
  return (
    <div className={`SidebarOption ${selected && "sidebar-active"}`}>
      <Icon style={{fontSize: '20px'}} />
      <div className="title">{title}</div>
      <p className="number">{number}</p>
    </div>
  );
}

export default SidebarOptions;
