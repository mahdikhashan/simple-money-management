import React from "react";

import { Outlet } from "react-router-dom";

import SideBar from "@Components/app/SideBar";

function DashboardLayout(props) {
  const { isOpen, toggle } = props;
  return (
    <div className="container-wrapper">
      <SideBar isOpen={isOpen} toggle={toggle} />
      <main className={`${isOpen ? "open" : ""}`}>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
