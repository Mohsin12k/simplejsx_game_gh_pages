import Button from "./Button"

const Header = ({endGame, start, stop, reset}) => {
  return (
    <header className="w-full py-[0.5%] bg-gray-600 flex flex-row justify-between items-center
    hover:border-b hover:border-solid hover:border-b-black/50 
    focus:border-b focus:border-solid focus:border-b-black/50
     transition-all duration-300 ease-out gap-3
     focus:shadow-[0_0_20px_#333] hover:shadow-[0_0_20px_#333] group/h-txt">
      <h1 className="custom_lg_txt text-white group-hover/h-txt:text-[lightblue] 
       group-focus/h-txt:text-[lightblue]
        font-bold tracking-widest uppercase ml-3 transition-all duration-300 ease-out
        group-hover/h-txt:text-shadow-[0_0_20px_lightblue]
        group-focus/h-txt:text-shadow-[0_0_20px_lightblue]
      ">Drive Car</h1>
      
      <nav className="w-[80%] py-[0.5%] mr-3 ml-3 flex justify-between items-center">
        <Button endGame={endGame} start={start} stop={stop} reset={reset} />
      </nav>

    </header>
  )
}

export default Header