import Line from "../../components/line/line"
import Circle from "../circle/circle"

import styles from "./pageMarking.module.scss"

const PageMarking = () => {
  return (
    <>
      <Line type="vertical" />
      <Line type="horizontal" />
      <div className={styles.circleModule}>
        <Circle />
      </div>
    </>
  )
}

export default PageMarking
