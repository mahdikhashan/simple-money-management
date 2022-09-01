import React, { memo, useState } from "react";

import { addCost } from "../../../store/cost/slices/cost";
import { useDispatch } from "react-redux";

import Input from "../../common/input";
import Select from "../../common/select";
import Button from "../../common/button";

import Modal from "../../common/modal";

import useEscapeKey from "../../../hooks/use-escape-key";

import CloseIcon from '../../../assets/icons/x-regular.png'

import './style.css'

const NewTransactionModal = memo(({ isOpen, onClose }) => {
  const isEscPressed = useEscapeKey({onClose})

  const dispatch = useDispatch()

  const [descriptionField, setDescriptionField] = useState('f')
  const [priceField, setPriceField] = useState('f')
  const [categoryField, setCategoryField] = useState('f')

  const descriptionOnChange = (e) => setDescriptionField(e.target.value)
  const priceOnChange = (e) => setPriceField(e.target.value)
  const categoryOnChange = (e) => setCategoryField(e.target.value)

  const formOnSubmitHandler = (e) => {
    e.preventDefault()

    dispatch(addCost({ priceField, descriptionField, categoryField }))

    onClose()
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={onClose}
        preventScroll={true}
      >
        <img className="close-btn" src={CloseIcon} alt='close' onClick={onClose} />
        <div className="wrapper">
          <form onSubmit={formOnSubmitHandler}>
            <h2>New transaction</h2>
            <div className="input-group">
              <Input
                type='text'
                value={descriptionField}
                onChangeHandler={descriptionOnChange}
                placeholder='Description' />
              <Input
                type='number'
                value={priceField}
                onChangeHandler={priceOnChange}
                placeholder='Price' />
              <Input
                type='text'
                value={categoryField}
                onChangeHandler={categoryOnChange}
                placeholder='Category' />
            </div>
            <div className="select-group">
              <Select variant='up' id='select-up' label='Enter' />
              <Select id='select-down' label='Exit' />
            </div>
            <Button variant='large'>Register</Button>
          </form>
        </div>
      </Modal>
    </>
  )
})

export default NewTransactionModal;