import { useContext } from "react"
import Arrow from "../../components/arrow/arrow"

import { HistoryDatesDispatch } from "../../context/historyDatesContext"
import { HistoryDatesContext } from "../../context/historyDatesContext"

import styles from "./navigateBlock.module.scss"

const NavigateBlock = () => {
  const { currentChoice, numberOfItems } = useContext(HistoryDatesContext)

  const dispatch = useContext(HistoryDatesDispatch)

  const firstNumber = `0${currentChoice}`
  const secondNumber = `0${numberOfItems}`

  const handleClick = (direction: string) => {
    dispatch({ type: "setPreviousChoice", payload: currentChoice })
    if (direction === "right") dispatch({ type: "currentChoiceIncrement" })
    else dispatch({ type: "currentChoiceDecrement" })
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
