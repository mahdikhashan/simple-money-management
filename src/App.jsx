import React, { useState } from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import NoMatch from "@Components/app/NoMatch";

import DashboardLayout from "@Layouts/DashboardLayout";
import DashboardPage from "@Pages/Dashboard";

import TransactionModal from "@Modals/transaction/transaction-modal";
import TransactionDeleteModal from "@Modals/transaction/transaction-delete-modal";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  let location = useLocation();

  let state = location.state;

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route
          path="/"
          element={
            <DashboardLayout isOpen={isSidebarOpen} toggle={toggleSidebar} />
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="/transaction/new" element={<TransactionModal />} />
          <Route path="/transaction/:id" element={<TransactionModal />} />
          <Route
            path="/transaction/:id/delete"
            element={<TransactionDeleteModal />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
