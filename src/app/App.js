import React, { useContext, useState } from 'react';

import classNames from 'classnames';

import { ThemeContext } from '../theme';

import Button from '../components/common/button';
import Input from '../components/common/input';

import { ModalView } from '../components/modal';
import Logo from '../components/common/logo';

import PaginatedTable from '../components/table';

import Card from '../components/common/card';

import '../styles/App.css';

function App() {
  const { darkMode } = useContext(ThemeContext)

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [filter, setFilter] = useState('')

  const onFilterChange = (e) => setFilter(e.target.value)

  const setModalIsOpenToTrue = () => setModalIsOpen(true)
  const setModalIsOpenToFalse = () => setModalIsOpen(false)

  return (
    <div className={classNames("App", { "App-dark-mode": darkMode })}>
      <ModalView modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpenToFalse} />
      <div className='top-black-box' />
      <div className='top-container' />
      <div className='top-wrapper'>
        <Logo />
        <Button onClick={setModalIsOpenToTrue}>New transaction</Button>
      </div>
      <div className='user-details'>
        <Card color="grey">
          <div className='user-detail-header'>
            <span>Enter</span>
            <span><img src={require('../assets/icons/arrow-circle-up-regular.png')} alt="icon" /></span>
          </div>
          <div className='user-detail-body'>R$ 17.400,00</div>
        </Card>
        <Card color="grey">
          <div className='user-detail-header'>
            <span>Output</span>
            <span><img src={require('../assets/icons/arrow-circle-down-regular.png')} alt="icon" /></span>
          </div>
          <div className='user-detail-body'>R$ 1.259,00</div>
        </Card>
        <Card color="green">
          <div className='user-detail-header'>
            <span>Total</span>
            <span><img src={require('../assets/icons/currency-dollar-regular.png')} alt="icon" /></span>
          </div>
          <div className='user-detail-body'>R$ 16.141,00</div>
        </Card>
      </div>
      <div className='search-bar'>
        <Input
          value={filter}
          onChangeHandler={onFilterChange}
          placeholder="Search for a transaction" />
        <Button variant="medium" search={true} >Search</Button>
      </div>
      <div className='transaction-table'>
        <PaginatedTable itemsPerPage={10} header={false} filterByDescription={filter} />
      </div>
    </div>
  );
}

export default App;
