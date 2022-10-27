import { configureStore } from '@reduxjs/toolkit'
import initReducer from './initSlice'
const store = configureStore({
  reducer: {
    init: initReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
