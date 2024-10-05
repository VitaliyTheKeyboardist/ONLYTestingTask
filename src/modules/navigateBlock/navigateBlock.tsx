import Arrow from "../../components/arrow/arrow"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxToolkitHooks"
import { historicalDatesSelector } from "../../store/slices/historicalDates/historicalDatesSelector"
import {
  currentChoiceDecrement,
  currentChoiceIncrement,
  setPreviousChoice,
} from "../../store/slices/historicalDates/historicalDatesSlice"

import styles from "./navigateBlock.module.scss"

const NavigateBlock = () => {
  const { numberOfItems, currentChoice } = useAppSelector(
    historicalDatesSelector
  )

  const dispatch = useAppDispatch()

  const firstNumber = `0${currentChoice}`
  const secondNumber = `0${numberOfItems}`

  const handleClick = (direction: string) => {
    dispatch(setPreviousChoice(currentChoice))
    if (direction === "right") dispatch(currentChoiceIncrement())
    else dispatch(currentChoiceDecrement())
  }

  return (
    <div className={styles.container}>
      <div className={styles.counter}>
        {firstNumber}/{secondNumber}
      </div>
      <div className={styles.buttonsBlock}>
        <Arrow
          type="left"
          isActive={currentChoice > 1}
          onClick={() => handleClick("left")}
        />
        <Arrow
          type="right"
          isActive={currentChoice < numberOfItems}
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  )
}

export default NavigateBlock
