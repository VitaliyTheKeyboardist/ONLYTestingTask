import { IDot } from "../../types/components/dot"

import { useContext } from "react"
import {
  HistoryDatesContext,
  HistoryDatesDispatch,
} from "../../context/historyDatesContext"

import styles from "./dot.module.scss"

const Dot = ({ style, item, index }: IDot) => {
  const { currentChoice, rotateValue } = useContext(HistoryDatesContext)

  const dispatch = useContext(HistoryDatesDispatch)

  const number = index + 1

  const rotate = -(style + rotateValue)

  const active = currentChoice === number

  const handleClick = () => {
    dispatch({ type: "setPreviousChoice", payload: currentChoice })
    dispatch({ type: "setCurrentChoice", payload: number })
    dispatch({ type: "setRotateValue", payload: style })
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
