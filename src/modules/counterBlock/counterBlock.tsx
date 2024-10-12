import YearsCounter from "../../components/yearsCounter/yearsCounter"

import { useContext } from "react"
import { HistoryDatesContext } from "../../context/historyDatesContext"

import styles from "./counterBlock.module.scss"

const CounterBlock = () => {
  const { content, currentChoice, previousChoice } = useContext(
    HistoryDatesContext
  )

  const index = currentChoice - 1
  const previousIndex = previousChoice - 1
  const dateStart = content.historicalDates[index].startYear
  const finishDate = content.historicalDates[index].lastYear
  const previousDateStart = content.historicalDates[previousIndex].startYear
  const previousFinishDate = content.historicalDates[previousIndex].lastYear

  return (
    <div className={styles.сounterBlock}>
      <YearsCounter
        type="primary"
        year={dateStart}
        previousYear={previousDateStart}
      />
      <YearsCounter
        type="secondary"
        year={finishDate}
        previousYear={previousFinishDate}
      />
    </div>
  )
}

export default CounterBlock
