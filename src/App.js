import React from "react";

import { Route, Routes, useLocation } from "react-router-dom";

import NoMatch from "@Components/app/NoMatch";

import DashboardLayout from "@Layouts/DashboardLayout";
import DashboardPage from "@Pages/Dashboard";

import TransactionModal from "@Modals/transaction/TransactionModal";

function App() {
  let location = useLocation();

  let state = location.state;

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="/transaction/new" element={<TransactionModal />} />
          <Route path="/transaction/:id" element={<TransactionModal />} />
        </Routes>
      )}
    </>
  );
}

export default App;
