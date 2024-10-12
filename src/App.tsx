import MainPage from "./pages/mainPage/mainPage"
import Dates from "./assets/mocks/dates.json"
import Dates2 from "./assets/mocks/dates2.json"

function App() {
  return (
    <div className="App">
      <MainPage content={Dates} />
      <MainPage content={Dates2} />
    </div>
  )
}

export default App
