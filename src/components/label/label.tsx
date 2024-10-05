import styles from "./label.module.scss"

export interface ILabel {
  content: string
}

const Label = ({ content }: ILabel) => {
  return <p className={styles.label}>{content}</p>
}

export default Label
