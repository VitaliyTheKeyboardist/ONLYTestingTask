import { IDot } from "../../types/components/dot"

import { useAppDispatch, useAppSelector } from "../../hooks/reduxToolkitHooks"
import {
  setCurrentChoice,
  setPreviousChoice,
  setRotateValue,
} from "../../store/slices/historicalDates/historicalDatesSlice"
import { historicalDatesSelector } from "../../store/slices/historicalDates/historicalDatesSelector"

import styles from "./dot.module.scss"

const Dot = ({ style, item, index }: IDot) => {
  const dispatch = useAppDispatch()

  const { currentChoice, rotateValue } = useAppSelector(historicalDatesSelector)

  const number = index + 1

  const rotate = -(style + rotateValue)

  const active = currentChoice === number

  const handleClick = () => {
    dispatch(setPreviousChoice(currentChoice))
    dispatch(setCurrentChoice(number))
    dispatch(setRotateValue(style))
  }

  return (
    <div
      className={styles.container}
      style={{ rotate: `${rotate}deg` }}
      onClick={handleClick}
    >
      <p className={active ? styles.label : styles.hidden}>{item.label}</p>
      <div className={active ? styles.number : styles.dot}>
        <button className={active ? styles.number : styles.dot}>
          {number}
        </button>
      </div>
    </div>
  )
}

export default Dot
