import { ITextContentBlock } from "../../types/components/textContentBlock"

import styles from "./textContentBlock.module.scss"

const TextContentBlock = ({ slide }: ITextContentBlock) => {
  return (
    <div className={styles.textContentBlock}>
      <div className={styles.date}>{slide.year}</div>
      <div className={styles.text}>{slide.content}</div>
    </div>
  )
}

export default TextContentBlock
