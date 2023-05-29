import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SquareId } from 'types'

import { addSquare } from '../actions'

type SquareState = {
  squares: Array<SquareId>
}

const initialState: SquareState = {
  squares: [],
}

export const squareSlice = createSlice({
  name: 'square',
  initialState,
  reducers: {},
  extraReducers: {
    [addSquare.type]: (state, action: PayloadAction<SquareId>) => {
      state.squares.push(action.payload)
    },
  },
})

export default squareSlice.reducer
