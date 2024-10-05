import { ILine } from "../../types/components/line"

import styles from "./line.module.scss"

const Line = ({ type }: ILine) => {
  return <div className={styles[type]}></div>
}

export default Line
