import Dot from "../../components/dot/dot"
import { useAppSelector } from "../../hooks/reduxToolkitHooks"
import { historicalDatesSelector } from "../../store/slices/historicalDates/historicalDatesSelector"

import styles from "./circle.module.scss"

const Circle = () => {
  const { content, rotateValue } = useAppSelector(historicalDatesSelector)

  return (
    <div className={styles.circle} style={{ rotate: `${rotateValue}deg` }}>
      {content.historicalDates.map((item, index) => {
        const length = content.historicalDates.length
        const deg = 360 / length
        const rotate = deg * index

        return (
          <div
            className={styles.item}
            style={{ rotate: `${rotate}deg` }}
            key={item.id}
          >
            <Dot style={rotate} item={item} index={index} />
          </div>
        )
      })}
    </div>
  )
}

export default Circle
