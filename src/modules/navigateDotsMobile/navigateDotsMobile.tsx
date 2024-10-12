import { useContext } from "react"
import DotMobile from "../../components/dotMobile/dotMobile"
import { HistoryDatesContext } from "../../context/historyDatesContext"
import styles from "./navigateDotsMobile.module.scss"

const NavigateDotsMobile = () => {
  const { content } = useContext(HistoryDatesContext)
  return (
    <div className={styles.dotsContainer}>
      {content.historicalDates.map((item, index) => {
        return <DotMobile index={index} key={item.id} />
      })}
    </div>
  )
}

export default NavigateDotsMobile
