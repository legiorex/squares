import { createAction } from '@reduxjs/toolkit'
import { SquareId } from 'types'

export const addSquare = createAction<SquareId>('ADD-SQUARE')
