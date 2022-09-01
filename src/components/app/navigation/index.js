import React from 'react'
import Logo from "../../common/logo";
import Button from "../../common/button";
import useModal from "../../../hooks/use-modal";
import NewTransactionModal from "../../modals/transaction/NewTransactionModal";

import './style.css'

const Navigation = () => {
  const [showModal] = useModal(NewTransactionModal);

  return (
    <>
      <div className='top-wrapper'>
        <Logo />
        <Button onClick={showModal}>New transaction</Button>
      </div>
    </>
  )
}

export default Navigation;