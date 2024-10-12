import { useContext } from "react"
import {
  HistoryDatesContext,
  HistoryDatesDispatch,
} from "../../context/historyDatesContext"
import { IDotMobile } from "../../types/components/dot"

import styles from "./dotMobile.module.scss"

const DotMobile = ({ index }: IDotMobile) => {
  const dispatch = useContext(HistoryDatesDispatch)

  const { currentChoice } = useContext(HistoryDatesContext)

  const number = index + 1

  const active = currentChoice === number

  const handleClick = () => {
    dispatch({ type: "setPreviousChoice", payload: currentChoice })
    dispatch({ type: "setCurrentChoice", payload: number })
  }

  return (
    <button
      className={active ? styles.active : styles.dot}
      onClick={handleClick}
    ></button>
  )
}

export default DotMobile
