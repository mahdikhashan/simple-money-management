import React from "react";

import { Outlet } from "react-router-dom";

import SideBar from "@Components/app/SideBar";

function DashboardLayout() {
  return (
    <div className="container-wrapper">
      <SideBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
