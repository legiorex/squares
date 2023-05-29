import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { squareReducer } from './reducers'

const rootReducer = combineReducers({ square: squareReducer })

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV === 'development',
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
