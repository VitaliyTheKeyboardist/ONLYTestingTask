import { useReducer } from "react"

import { IHistoricalDates } from "../types/slices/historicalDates"
import { historyDatesReducer } from "./historyDatesReducer"
import {
  HistoryDatesContext,
  HistoryDatesDispatch,
} from "./historyDatesContext"
import { IHistoryDatesProvider } from "../types/components/historyDatesProvider"

const HistoryDatesProvider = ({ content, children }: IHistoryDatesProvider) => {
  const initialState: IHistoricalDates = {
    content: content,
    numberOfItems: content.historicalDates.length,
    currentChoice: 1,
    previousChoice: 1,
    baseRotateValue: 360 / content.historicalDates.length / 2,
    rotateValue: 360 / content.historicalDates.length / 2,
    rotateRatio: 360 / content.historicalDates.length,
  }
  const [value, dispatch] = useReducer(historyDatesReducer, initialState)

  return (
    <HistoryDatesContext.Provider value={value}>
      <HistoryDatesDispatch.Provider value={dispatch}>
        {children}
      </HistoryDatesDispatch.Provider>
    </HistoryDatesContext.Provider>
  )
}

export default HistoryDatesProvider
