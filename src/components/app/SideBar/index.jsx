import React, { useState } from "react";

import Logo from "@Components/common/logo";

import "./style.css";

function SideBar(props) {
  const { isOpen, toggle } = props;
  return (
    <aside className={`${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <Logo />
      </div>
      <div className="sidebar-body"></div>
      <div className="sidebar-footer">
        <button className="sidebar-roll-button" onClick={toggle}>
          <img
            className={`sidebar-roll-icon ${isOpen ? "open" : ""}`}
            src={require("../../../assets/icons/arrow-right-white-50.png")}
            alt="arrow-right-sidebar"
          />
        </button>
      </div>
    </aside>
  );
}

export default SideBar;
