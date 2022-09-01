import React from 'react';

import classNames from 'classnames';
import useDarkMode from "./hooks/use-dark-mode";

import PaginatedTable from './components/app/table';

import Navigation from "./components/app/navigation";
import TransactionDetails from "./components/app/TransactionDetails";
import SearchBar from "./components/app/SearchBar";

import './styles/App.css';

function App() {
  const { darkMode } = useDarkMode()

  return (
    <div className={classNames("App", { "App-white-mode": darkMode })}>
      <div className={ darkMode ? 'top-black-box' : 'top-white-box'} />
      <div className='top-container' />
      <Navigation />
      <TransactionDetails />
      <SearchBar />
      <div className='transaction-table'>
        <PaginatedTable itemsPerPage={3} header={false} />
      </div>
    </div>
  );
}

export default App;
