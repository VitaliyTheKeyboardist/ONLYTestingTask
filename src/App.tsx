import MainPage from "./pages/mainPage/mainPage"
import Dates from "./assets/mocks/dates.json"
// import Dates2 from "./assets/mocks/dates2.json"

function App() {
  return (
    <div className="App">
      <MainPage content={Dates} />
      {/* Весь компонент можно использовать несколько раз на странице, с различным набором данных, передавая их в props. 
          Они будут децствовать независимо*/}
      {/* <MainPage content={Dates2} /> */}
    </div>
  )
}

export default App
