import { RootState } from "../.."

export const historicalDatesSelector = (state: RootState) => {
  return state.historicalDates
}
