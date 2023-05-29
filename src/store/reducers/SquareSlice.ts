import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Square } from 'types'

import { addSquare, removeSquare } from '../actions'

type SquareState = {
  squares: Array<Square>
}

const initialState: SquareState = {
  squares: [],
}

export const squareSlice = createSlice({
  name: 'squares',
  initialState,
  reducers: {},
  extraReducers: {
    [addSquare.type]: (state, action: PayloadAction<Square>) => {
      state.squares.push(action.payload)
    },
    [removeSquare.type]: (state) => {
      state.squares.pop()
    },
  },
})

export default squareSlice.reducer
