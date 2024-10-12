import { useContext, useLayoutEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import gsap from "gsap"
import TextContentBlock from "../../components/textContentBlock/textContentBlock"

import Line from "../../components/line/line"

import "swiper/scss"
import "swiper/css/pagination"
import Label from "../../components/label/label"

import { HistoryDatesContext } from "../../context/historyDatesContext"

import styles from "./sliderMobile.module.scss"

const SliderMobile = () => {
  const { content, currentChoice } = useContext(HistoryDatesContext)

  const swiperRef = useRef(null)

  const index = currentChoice - 1

  const datesBlock = content.historicalDates[index]

  useLayoutEffect(() => {
    gsap.fromTo(
      swiperRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, delay: 0.5, duration: 0.5 }
    )
  }, [currentChoice])

  return (
    <>
      <div className={styles.sliderContainerMobile} ref={swiperRef}>
        <Label content={datesBlock.label} />
        <Line type="horizontalMobile" />
        <Swiper
          className={styles.swiper}
          modules={[Navigation, Pagination]}
          navigation
          spaceBetween={80}
          slidesPerView={"auto"}
        >
          {datesBlock.dates.map((item) => {
            return (
              <SwiperSlide key={item.slideId} className={styles.swiperSlide}>
                <TextContentBlock slide={item} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}

export default SliderMobile
