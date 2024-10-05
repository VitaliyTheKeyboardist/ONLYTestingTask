import Circle from "../../modules/circle/circle"
import CounterBlock from "../../modules/counterBlock/counterBlock"
import NavigateBlock from "../../modules/navigateBlock/navigateBlock"
import TextContentBlock from "../textContentBlock/textContentBlock"
import TitleBlock from "../titleBlock/titleBlock"

const AppTest = () => {
  return (
    <>
      <NavigateBlock />
      <TitleBlock />
      <CounterBlock />
      <Circle />
    </>
  )
}

export default AppTest
