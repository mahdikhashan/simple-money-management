import React from 'react'
import Logo from "../../common/logo";
import Button from "../../common/button";
import useModal from "../../../hooks/useModal";
import transactionModal from "../../modals/transaction/transactionModal";
import useDarkMode from "../../../hooks/useDarkMode";

import './style.css'

const Navigation = () => {
  const [showModal] = useModal(transactionModal);
  const {darkMode, toggleDarkMode} = useDarkMode()

  return (
    <>
      <div className='top-wrapper'>
        <Logo />
        <div className='btn-wrapper'>
          <Button onClick={() => showModal({})}>New transaction</Button>
          <img
            onClick={toggleDarkMode}
            src={
              darkMode
              ?
              require('../../../assets/icons/moon-white-regular.png')
              :
              require('../../../assets/icons/sun-white-filled-regular.png')
            }
            alt='dark-mode-icon' />
        </div>
      </div>
    </>
  )
}

export default Navigation;