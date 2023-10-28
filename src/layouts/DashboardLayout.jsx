import React from "react";

import { Outlet } from "react-router-dom";

import SideBar from "@Components/app/SideBar";

function DashboardLayout(props) {
  const { children } = props;

  return (
    <>
      <SideBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default DashboardLayout;
