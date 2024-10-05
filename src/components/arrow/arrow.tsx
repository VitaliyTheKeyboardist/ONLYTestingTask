import ArrowRightActive from "../../assets/icons/ArrowRightActive.svg"
import ArrowLeftActive from "../../assets/icons/ArrowLeftActive.svg"
import ArrowLeft from "../../assets/icons/ArrowLeft.svg"
import ArrowRight from "../../assets/icons/ArrowRight.svg"
import { IArrow } from "../../types/components/arrow"

import styles from "./arrow.module.scss"

const Arrow = ({ type, isActive, onClick }: IArrow) => {
  if (type === "left")
    return (
      <>
        {isActive ? (
          <img
            className={styles.imageActive}
            src={ArrowLeftActive}
            alt="стрелка навигации активна"
            onClick={onClick}
          />
        ) : (
          <img
            className={styles.image}
            src={ArrowLeft}
            alt="стрелка навигации неактивна"
            onClick={onClick}
          />
        )}
      </>
    )
  else
    return (
      <>
        {isActive ? (
          <img
            className={styles.imageActive}
            src={ArrowRightActive}
            alt="стрелка навигации аткивна"
            onClick={onClick}
          />
        ) : (
          <img
            className={styles.image}
            src={ArrowRight}
            alt="стрелка навигации неактивна"
            onClick={onClick}
          />
        )}
      </>
    )
}

export default Arrow
