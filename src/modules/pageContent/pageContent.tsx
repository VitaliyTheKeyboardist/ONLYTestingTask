import TitleBlock from "../../components/titleBlock/titleBlock"
import CounterBlock from "../counterBlock/counterBlock"
import HistoricalDatesBlock from "../historicalDatesBlock/historicalDatesBlock"
import styles from "./pageContent.module.scss"

const PageContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <TitleBlock />
      </div>
        <CounterBlock />
        <HistoricalDatesBlock />
    </div>
  )
}

export default PageContent
