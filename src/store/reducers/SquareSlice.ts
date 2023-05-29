import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SquareId } from 'types'

import { addSquare, removeSquare } from '../actions'

type SquareState = {
  squares: Array<SquareId>
}

const initialState: SquareState = {
  squares: [],
}

export const squareSlice = createSlice({
  name: 'squares',
  initialState,
  reducers: {},
  extraReducers: {
    [addSquare.type]: (state, action: PayloadAction<SquareId>) => {
      state.squares.push(action.payload)
    },
    [removeSquare.type]: (state) => {
      state.squares.pop()
    },
  },
})

export default squareSlice.reducer
