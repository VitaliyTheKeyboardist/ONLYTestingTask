import SliderArrow from "../../assets/icons/sliderArrow.svg"
import { useSwiper } from "swiper/react"

import { ISliderNavigateButton } from "../../types/components/ISliderNavigateButton"

import styles from "./sliderNavigateButton.module.scss"

const SliderNavigateButton = ({ type, isActive }: ISliderNavigateButton) => {
  const swiper = useSwiper()

  return (
    <>
      {type === "leftArrow" && (
        <div className={styles.leftContainer}>
          <div
            className={isActive ? styles.leftArrow : styles.hidden}
            onClick={() => swiper.slidePrev()}
          >
            <img src={SliderArrow} alt="стрелка влево" />
          </div>
        </div>
      )}
      {type === "rightArrow" && (
        <div className={styles.rightContainer}>
          <div
            className={isActive ? styles.rightArrow : styles.hidden}
            onClick={() => swiper.slideNext()}
          >
            <img src={SliderArrow} alt="стрелка вправо" />
          </div>
        </div>
      )}
    </>
  )
}

export default SliderNavigateButton
