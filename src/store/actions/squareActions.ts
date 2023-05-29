import { createAction } from '@reduxjs/toolkit'
import { Square } from 'types'

export const addSquare = createAction<Square>('ADD-SQUARE')
export const removeSquare = createAction('REMOVE-SQUARE')
