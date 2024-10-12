export interface IDates {
  slideId: number
  year: number
  content: string
}

export interface IHistoricalDatesContent {
  historicalDates: {
    id: number
    label: string
    startYear: number
    lastYear: number
    dates: IDates[]
  }[]
}
