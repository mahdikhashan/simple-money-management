import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addCost } from "../../states/cost";

import Input from "../common/input";
import Select from "../common/select";
import Button from "../common/button";

import './style.css'

export default function Form({ handleModal }) {

  const dispatch = useDispatch()

  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

  const descriptionOnChange = (e) => setDescription(e.target.value)
  const priceOnChange = (e) => setPrice(e.target.value)
  const categoryOnChange = (e) => setCategory(e.target.value)

  const formOnSubmitHandler = (e) => {
    e.preventDefault()

    dispatch(addCost({ price, description, category }))

    handleModal()
  }

  return (
    <>
      <form onSubmit={formOnSubmitHandler}>
        <h2>New transaction</h2>

        <div className="input-group">
          <Input
            type='text'
            value={description}
            onChangeHandler={descriptionOnChange}
            placeholder='Description' />
          <Input
            type='number'
            value={price}
            onChangeHandler={priceOnChange}
            placeholder='Price' />
          <Input
            type='text'
            value={category}
            onChangeHandler={categoryOnChange}
            placeholder='Category' />
        </div>

        <div className="select-group">
          <Select variant='up' id='select-up' label='Enter' />
          <Select id='select-down' label='Exit' />
        </div>

        <Button variant='large'>Register</Button>
      </form>
    </>
  )
}