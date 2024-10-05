import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IHistoricalDates } from "../../../types/slices/historicalDates"
import Dates from "../../../assets/mocks/dates.json"

const initialState: IHistoricalDates = {
  content: Dates,
  numberOfItems: Dates.historicalDates.length,
  currentChoice: 1,
  previousChoice: 1,
  baseRotateValue: 360 / Dates.historicalDates.length / 2,
  rotateValue: 360 / Dates.historicalDates.length / 2,
  rotateRatio: 360 / Dates.historicalDates.length,
}

const historicalDates = createSlice({
  name: "historicalDates",
  initialState,
  reducers: {
    currentChoiceIncrement(state: IHistoricalDates) {
      if (state.currentChoice < state.numberOfItems) {
        state.currentChoice += 1
        state.rotateValue -= state.rotateRatio
      } else return
    },
    currentChoiceDecrement(state: IHistoricalDates) {
      if (state.currentChoice > 1) {
        state.currentChoice -= 1
        state.rotateValue += state.rotateRatio
      } else return
    },
    setCurrentChoice(state: IHistoricalDates, action: PayloadAction<number>) {
      state.currentChoice = action.payload
    },
    setPreviousChoice(state: IHistoricalDates, action: PayloadAction<number>) {
      state.previousChoice = action.payload
    },
    setRotateValue(state: IHistoricalDates, action: PayloadAction<number>) {
      state.rotateValue = state.baseRotateValue - action.payload
    },
  },
})

export const {
  currentChoiceDecrement,
  currentChoiceIncrement,
  setCurrentChoice,
  setPreviousChoice,
  setRotateValue,
} = historicalDates.actions

export default historicalDates.reducer
