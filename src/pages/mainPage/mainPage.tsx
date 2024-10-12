import HistoryDatesProvider from "../../context/historyDatesProvider"

import PageContent from "../../modules/pageContent/pageContent"
import PageMarking from "../../modules/pageMarking/pageMarking"

import { IMainPage } from "../../types/components/mainPage"

import styles from "./mainPage.module.scss"

const MainPage = ({ content }: IMainPage) => {
  return (
    <>
      <HistoryDatesProvider content={content}>
        <div className={styles.pageWrap}>
          <PageMarking />
          <PageContent />
        </div>
        <div className={styles.pageWrapMobile}>
          <PageContent />
        </div>
      </HistoryDatesProvider>
    </>
  )
}

export default MainPage
