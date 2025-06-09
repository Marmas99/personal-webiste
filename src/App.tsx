import HeroCard from "./components/Containers/Cards/HeroCard"
import style from "./App.module.css"

const App = () => {
  return (
    <>
      <div className={style.App}>
        <div className={"container"}>
          <HeroCard />
        </div>
      </div>
    </>
  )
}

export default App