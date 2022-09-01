import React, { memo, useState } from "react";

import { addCost } from "../../../store/cost/slices";
import { useDispatch } from "react-redux";

import Input from "../../common/input";
import Select from "../../common/select";
import Button from "../../common/button";

import Modal from "../../common/modal";

import useEscapeKey from "../../../hooks/use-escape-key";

import CloseIcon from '../../../assets/icons/x-regular.png'

import './style.css'

const EditTransactionModal = memo(({ isOpen, onClose, ...initials }) => {
  const isEscPressed = useEscapeKey({onClose})

  const dispatch = useDispatch()

  const [descriptionField, setDescriptionField] = useState(initials.description)
  const [priceField, setPriceField] = useState(initials.price)
  const [categoryField, setCategoryField] = useState(initials.category)

  const descriptionOnChange = (e) => setDescriptionField(e.target.value)
  const priceOnChange = (e) => setPriceField(e.target.value)
  const categoryOnChange = (e) => setCategoryField(e.target.value)

  const formOnSubmitHandler = (e) => {
    e.preventDefault()

    dispatch(addCost({ priceField, descriptionField, categoryField }))

    onClose()
  }

  const [SelectComponent, setSelectComponent] = useState(false)

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
              <Select
                id='select-up'
                label='Enter'
                variant='up'
                value={SelectComponent}
                changeHandle={setSelectComponent}
              />
              <Select
                id='select-down'
                label='Enter'
                variant='down'
                value={SelectComponent}
                changeHandle={setSelectComponent}
              />
            </div>
            <Button variant='large'>Edit</Button>
          </form>
        </div>
      </Modal>
    </>
  )
})

export default EditTransactionModal;