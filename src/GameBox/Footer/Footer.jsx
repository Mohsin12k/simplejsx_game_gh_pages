
const Footer = () => {
  const today = new Date();
  const dateProvider = {
    day: '2-digit',
    weekday: 'short',
    month: 'short',
    year: 'numeric'
  };
  return (
    <footer  className="w-full py-[0.5%] bg-gray-600
    ">
      <p className='text-white font-bold tracking-widest custom-sm_txt w-full 
       flex justify-center items-center
      '>
        Copyright &copy; Cars Game 
        <span className='border border-black rounded-full p-[0.3%] ml-1'>
          {today.toLocaleDateString('en-US', dateProvider)}
        </span>
      </p>
    </footer>
  )
}

export default Footer