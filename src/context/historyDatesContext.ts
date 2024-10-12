import { createContext } from "react"
import { IHistoricalDates } from "../types/slices/historicalDates"
import { historyDatesReducer } from "./historyDatesReducer"
import Dates from "../assets/mocks/dates.json"

export const HistoryDatesContext = createContext<IHistoricalDates>({
  content: Dates,
  numberOfItems: Dates.historicalDates.length,
  currentChoice: 1,
  previousChoice: 1,
  baseRotateValue: 360 / Dates.historicalDates.length / 2,
  rotateValue: 360 / Dates.historicalDates.length / 2,
  rotateRatio: 360 / Dates.historicalDates.length,
})
export const HistoryDatesDispatch = createContext<any>(historyDatesReducer)
