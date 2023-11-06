import React, { useState } from "react";

import Logo from "@Components/common/logo";

import "./style.css";

function SideBar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <aside className={``}>
      <div className="sidebar-header">
        <Logo />
      </div>
      <div className="sidebar-body"></div>
      <div className="sidebar-footer">
        <button className="sidebar-roll-button" onClick={toggleSidebar}>
          <img
            className="sidebar-roll-icon"
            src={require("../../../assets/icons/arrow-right-white-50.png")}
            alt="arrow-right-sidebar"
          />
        </button>
      </div>
    </aside>
  );
}

export default SideBar;
