import { ReactNode } from "react"
import { IHistoricalDatesContent } from "../dataTypes/dates"

export interface IHistoryDatesProvider {
  content: IHistoricalDatesContent
  children: ReactNode
}
