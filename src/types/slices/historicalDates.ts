import Dates from "../../assets/mocks/dates.json"

export interface IHistoricalDates {
    content: typeof Dates
    numberOfItems: number
    currentChoice: number
    previousChoice: number
    baseRotateValue: number
    rotateValue: number
    rotateRatio: number
}