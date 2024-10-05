import { useAppDispatch, useAppSelector } from "../../hooks/reduxToolkitHooks"
import { historicalDatesSelector } from "../../store/slices/historicalDates/historicalDatesSelector"
import {
  setCurrentChoice,
  setPreviousChoice,
} from "../../store/slices/historicalDates/historicalDatesSlice"
import styles from "./dotMobile.module.scss"

export interface IDotMobile {
  index: number
}

const DotMobile = ({ index }: IDotMobile) => {
  const dispatch = useAppDispatch()

  const { currentChoice } = useAppSelector(historicalDatesSelector)

  const number = index + 1

  const active = currentChoice === number

  const handleClick = () => {
    dispatch(setPreviousChoice(currentChoice))
    dispatch(setCurrentChoice(number))
  }

  return (
    <button
      className={active ? styles.active : styles.dot}
      onClick={handleClick}
    >
    </button>
  )
}

export default DotMobile
