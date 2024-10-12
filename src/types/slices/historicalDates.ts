import { IHistoricalDatesContent } from "../dataTypes/dates"

export interface IHistoricalDates {
  content: IHistoricalDatesContent
  numberOfItems: number
  currentChoice: number
  previousChoice: number
  baseRotateValue: number
  rotateValue: number
  rotateRatio: number
}
