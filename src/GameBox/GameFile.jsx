import Header from "./Header/Header"
import Content from "./Content/Content"
import Footer from "./Footer/Footer"

const GameFile = ({endGame, start, carRef, cityRef, stop, reset}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header endGame={endGame} start={start} stop={stop} reset={reset} />
      <Content carRef={carRef} cityRef={cityRef} />
      <Footer />
    </div>
  )
}

export default GameFile