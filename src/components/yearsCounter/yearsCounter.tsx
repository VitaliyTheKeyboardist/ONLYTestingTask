import { useEffect, useRef } from "react"
import gsap from "gsap"
import { IYearsCounter } from "../../types/components/yearsCounter"

import styles from "./yearsCounter.module.scss"

const YearsCounter = ({ type, year, previousYear }: IYearsCounter) => {
  const yearRef = useRef(null)

  useEffect(() => {
    gsap.to(yearRef.current, {
      innerText: year,
      duration: 1,
      snap: {
        innerText: 1,
      },
    })
  }, [yearRef, year, previousYear])

  return (
    <div className={styles[type]} ref={yearRef}>
      {previousYear}
    </div>
  )
}

export default YearsCounter
