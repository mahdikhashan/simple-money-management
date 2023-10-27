import React, { useState } from "react";

import useFilterByDescription from "./store/cost/selectors/filterByDescription";

import classNames from "classnames";
import useDarkMode from "./hooks/useDarkMode";

import PaginatedTable from "./components/app/Table";

import Navigation from "./components/app/Navigation";
import TransactionDetails from "./components/app/TransactionDetails";
import SearchBar from "./components/app/SearchBar";

import "./styles/App.css";

function App() {
  const { darkMode } = useDarkMode();
  const [searchKeyword, setSearchKeyword] = useState("");
  const filteredCost = useFilterByDescription(searchKeyword);

  return (
    <div className={classNames("App", { "App-white-mode": darkMode })}>
      <div className={darkMode ? "top-black-box" : "top-white-box"} />
      <div className="top-container" />
      <Navigation />
      <TransactionDetails />
      <SearchBar
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        onClick={() => []}
      />
      <div className="transaction-table">
        <PaginatedTable data={filteredCost} itemsPerPage={10} header={false} />
      </div>
    </div>
  );
}

export default App;
