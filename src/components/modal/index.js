// TODO: General modal component with design patterns

import React from "react";

import Modal from 'react-modal'
import Form from './form'

import useEscapeKey from "../../hooks/use-escape-key";

import CloseIcon from '../../assets/icons/x-regular.png'

import './style.css'

export const ModalView = ({modalIsOpen, setModalIsOpen}) => {
  const isEscPressed = useEscapeKey({setModalIsOpen})

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={setModalIsOpen}
        preventScroll={true}
      >
        <img className="close-btn" src={CloseIcon} alt='close' onClick={setModalIsOpen} />
        <div className="wrapper">
          <Form handleModal={setModalIsOpen}/>
        </div>
      </Modal>
    </>
  )
}