import NavigateBlock from "../navigateBlock/navigateBlock"
import NavigateDotsMobile from "../navigateDotsMobile/navigateDotsMobile"
import Slider from "../slider/slider"

import styles from "./historicalDatesBlock.module.scss"

const HistoricalDatesBlock = () => {
  return (
    <>
      <div className={styles.container}>
        <NavigateBlock />
        <Slider />
      </div>
      <div className={styles.containerMobile}>
        <Slider />
        <NavigateBlock />
        <NavigateDotsMobile />
      </div>
    </>
  )
}

export default HistoricalDatesBlock
