export interface IHistoricalPeriod {
  id: number
  label: string
  startYear: number
  lastYear: number
  dates: ISlide[]
}

export interface ISlide {
  slideId: number
  year: number
  content: string
}
