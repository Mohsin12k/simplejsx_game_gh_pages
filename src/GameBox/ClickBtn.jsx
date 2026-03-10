
const ClickBtn = ({startGame}) => {
  return (
     <main className="bg-gray-600 w-full h-screen flex justify-center items-center">
        <section className="group/top-txt custom_section_w custom_section_h border-2 
         border-solid border-white p-[0.5%] rounded-lg flex justify-center 
         items-center flex-col transition-all 
         duration-300 ease-out focus:shadow-[0_0_20px_5px_lightblue] 
         hover:shadow-[0_0_20px_5px_lightblue]">
          <h2 className="custom_lg_txt text-white font-bold tracking-widest uppercase
          transition-all duration-300 ease-out mb-1
           group-focus/top-txt:text-shadow-[0_0_20px_lightblue]
           group-hover/top-txt:text-shadow-[0_0_20px_lightblue]
           ">
            Click To Start The Game
          </h2>
          <button onClick={() => startGame()} 
          className="custom_width custom_height custom_round_circle flex justify-center items-center
          rounded-full relative after:absolute after:content-[''] after:bg-black 
          after:w-[95%] after:h-[95%] after:rounded-full after:border-2 after:border-[#777]
          after:border-solid cursor-pointer
          after:transition-all after:duration-300 after:ease-out
          transition-all duration-300 ease-out
          focus:text-shadow-[0_0_20px_#000]
          hover:text-shadow-[0_0_20px_#000]
          focus:after:shadow-[0_0_20px_5px_lightblue]
          hover:after:shadow-[0_0_20px_5px_lightblue]
          focus:after:bg-white
          hover:after:bg-white
            group/btntxt
          "><span 
          className="relative z-20 text-white custom_lg_txt font-bold uppercase tracking-widest
          group-hover/btntxt:transition-all group-hover/btntxt:duration-300  group-hover/btntxt:ease-out
           group-hover/btntxt:text-black
          ">Start Game</span></button>
          <p className="custom_sm_txt text-white font-bold tracking-widest uppercase
              transition-all duration-300 ease-out mt-1
              group-focus/top-txt:text-shadow-[0_0_20px_lightblue]
              group-hover/top-txt:text-shadow-[0_0_20px_lightblue]
          ">
            React.js + Tailwindcss
          </p>
        </section>
      </main>

  )
}

export default ClickBtn