// TODO: Uppercase naming convention for actions
// TODO: Separate file for actions
// TODO: Introduce selector functions

import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const costSlice = createSlice({
  name: 'costs',
  initialState: [],
  reducers: {
    addCost: (state, action) => {
      const d = new Date()
      const cost = {
        id: uuid(),
        price: action.payload.price,
        category: action.payload.category,
        description: action.payload.description,
        date: d.toLocaleDateString('en-US'),
        transactionType: action.payload.transactionType
      }

      state.push(cost);
    },
    removeCost: (state, action) => {
      return state.filter((cost) => cost.id !== action.payload.id)
    },
    updateCost: (state, action) => {
      const index = state.findIndex((row) => row.id === action.payload.id)
      if (index !== -1) {
        const id = state[index].id
        const d = new Date()
        state[index] = {...action.payload, date: d.toLocaleDateString('en-US'), id}
      }
    },
    filterByID: (state, action) => {
      return state.filter((row) => row.id === action.payload.id)
    },
    filterCostByDescription: (state, action) => {
      const filteredState = state.filter((item) =>
        item.description.toLowerCase().includes(action.payload.search.toLowerCase())
      )

      return filteredState
    }
  }
})

export const { addCost, removeCost, filterCostByDescription, updateCost } = costSlice.actions;

export default costSlice.reducer;