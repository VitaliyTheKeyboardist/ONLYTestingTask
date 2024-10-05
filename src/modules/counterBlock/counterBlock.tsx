import YearsCounter from "../../components/yearsCounter/yearsCounter"
import { useAppSelector } from "../../hooks/reduxToolkitHooks"
import { historicalDatesSelector } from "../../store/slices/historicalDates/historicalDatesSelector"
import Dates from "../../assets/mocks/dates.json"

import styles from "./counterBlock.module.scss"

const CounterBlock = () => {
  const { currentChoice, previousChoice } = useAppSelector(
    historicalDatesSelector
  )

  const index = currentChoice - 1
  const previousIndex = previousChoice - 1
  const dateStart = Dates.historicalDates[index].startYear
  const finishDate = Dates.historicalDates[index].lastYear
  const previousDateStart = Dates.historicalDates[previousIndex].startYear
  const previousFinishDate = Dates.historicalDates[previousIndex].lastYear

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
