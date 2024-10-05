import DotMobile from "../../components/dotMobile/dotMobile"
import { useAppSelector } from "../../hooks/reduxToolkitHooks"
import { historicalDatesSelector } from "../../store/slices/historicalDates/historicalDatesSelector"
import styles from "./navigateDotsMobile.module.scss"

const NavigateDotsMobile = () => {
  const { content } = useAppSelector(historicalDatesSelector)
  return (
    <div className={styles.dotsContainer}>
      {content.historicalDates.map((item, index) => {
        return <DotMobile index={index} key={item.id} />
      })}
    </div>
  )
}

export default NavigateDotsMobile
