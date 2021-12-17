import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducer/reducer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})