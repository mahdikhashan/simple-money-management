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
        price: action.payload.priceField,
        category: action.payload.categoryField,
        description: action.payload.descriptionField,
        date: d.toLocaleDateString('en-US')
      }

      state.push(cost);
    },
    removeCost: (state, action) => {
      return state.filter((cost) => cost.id !== action.payload.id)
    },
    updateCost: (state, action) => {
      // TODO: update item in state
    },
    filterCostByDescription: (state, action) => {
      const stateFiltered = state.filter((item) =>
        item.description.toLowerCase().includes(action.payload.search.toLowerCase())
      )

      return stateFiltered
    }
  }
})

export const { addCost, removeCost, filterCostByDescription, updateCost } = costSlice.actions;

export default costSlice.reducer;