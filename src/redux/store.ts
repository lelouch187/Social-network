import { configureStore } from '@reduxjs/toolkit'
import profile from './slice/profilePageSlice'

export const store = configureStore({
  reducer: {
    profile,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch