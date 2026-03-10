
const Button = ({endGame, start, stop, reset}) => {
  return (
    <>
        <button type="button" onClick={() => start()}
            className="custom_lg_txt text-white font-bold tracking-widest uppercase cursor-pointer
            transition-all duration-300 ease-in-out mr-3 ml-3 bg-black rounded-full px-[2%] py-[1%]
            focus:text-black focus:bg-white hover:text-black hover:bg-white
            focus:shadow-[0_0_20px_5px_lightblue] hover:shadow-[0_0_20px_5px_lightblue]
            focus:text-shadow-[0_0_20px_#4ade80] hover:text-shadow-[0_0_20px_#4ade80]
            "
        >
            Start
        </button>

        <button type="button" onClick={() => stop()}
            className="custom_lg_txt text-white font-bold tracking-widest uppercase cursor-pointer
            transition-all duration-300 ease-in-out mr-3 ml-3 bg-black rounded-full px-[2%] py-[1%]
            focus:text-black focus:bg-white hover:text-black hover:bg-white
            focus:shadow-[0_0_20px_5px_lightblue] hover:shadow-[0_0_20px_5px_lightblue]
            focus:text-shadow-[0_0_20px_#4ade80] hover:text-shadow-[0_0_20px_#4ade80]
            "
        >
            Stop
        </button>

        <button type="button" onClick={() => reset()}
            className="custom_lg_txt text-white font-bold tracking-widest uppercase cursor-pointer
            transition-all duration-300 ease-in-out mr-3 ml-3 bg-black rounded-full px-[2%] py-[1%]
            focus:text-black focus:bg-white hover:text-black hover:bg-white
            focus:shadow-[0_0_20px_5px_lightblue] hover:shadow-[0_0_20px_5px_lightblue]
            focus:text-shadow-[0_0_20px_#4ade80] hover:text-shadow-[0_0_20px_#4ade80]
            "
        >
            Reset
        </button>

        <button type="button" onClick={() => endGame()}
            className="custom_lg_txt text-white font-bold tracking-widest uppercase cursor-pointer
            transition-all duration-300 ease-in-out mr-3 ml-3 bg-black rounded-full px-[2%] py-[1%]
            focus:text-black focus:bg-white hover:text-black hover:bg-white
            focus:shadow-[0_0_20px_5px_lightblue] hover:shadow-[0_0_20px_5px_lightblue]
            focus:text-shadow-[0_0_20px_#4ade80] hover:text-shadow-[0_0_20px_#4ade80]
            "
        >
            End
        </button>
    </>
    
  )
}

export default Button