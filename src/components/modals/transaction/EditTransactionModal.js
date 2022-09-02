import React, { memo, useState } from "react";

import { updateCost } from "../../../store/cost/slices";
import { useDispatch } from "react-redux";

import Input from "../../common/input";
import Select from "../../common/select";
import Button from "../../common/button";

import Modal from "../../common/modal";

import useEscapeKey from "../../../hooks/use-escape-key";

import CloseIcon from '../../../assets/icons/x-regular.png'

import './style.css'

const EditTransactionModal = memo(({ isOpen, onClose, ...initials }) => {
  const dispatch = useDispatch()

  useEscapeKey({onClose})

  const [descriptionField, setDescriptionField] = useState(initials.description)
  const [priceField, setPriceField] = useState(initials.price)
  const [categoryField, setCategoryField] = useState(initials.category)

  const descriptionOnChange = (e) => setDescriptionField(e.target.value)
  const priceOnChange = (e) => setPriceField(e.target.value)
  const categoryOnChange = (e) => setCategoryField(e.target.value)

  const formOnSubmitHandler = (e) => {
    e.preventDefault()

    dispatch(updateCost({
        price: priceField,
        description: descriptionField,
        category: categoryField,
        id: initials.id,
        date: initials.date,
        input: transactionTypeField === 'up'
      })
    )

    onClose()
  }

  const [transactionTypeField, setTransactionTypeField] = useState(initials.input ? 'up' : 'down')

  const onChangeSelectGroup = (e) => {
    setTransactionTypeField(e.target.value)
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
                onChange={descriptionOnChange}
                placeholder='Description' />
              <Input
                type='number'
                value={priceField}
                onChange={priceOnChange}
                placeholder='Price' />
              <Input
                type='text'
                value={categoryField}
                onChange={categoryOnChange}
                placeholder='Category' />
            </div>
            <div
              className="select-group"
              onChange={onChangeSelectGroup}
            >
              <Select
                id='select-up'
                label='Enter'
                variant='up'
                name='select-transaction-type'
                value='up'
                checked={transactionTypeField === 'up'}
              />
              <Select
                id='select-down'
                label='Enter'
                variant='down'
                name='select-transaction-type'
                value='down'
                checked={transactionTypeField === 'down'}
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