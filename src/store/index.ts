import { configureStore } from "@reduxjs/toolkit"
import historicalDatesReduser from "./slices/historicalDates/historicalDatesSlice"

export const store = configureStore({
  reducer: {
    historicalDates: historicalDatesReduser,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
