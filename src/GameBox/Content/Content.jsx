import city from './images/city.jpeg'
import car from './images/car.jpeg'

const Content = ({carRef, cityRef }) => {
 
  return (
    <>
    <main className='grow bg-amber-300 flex flex-col justify-center items-center'>
      <section className="relative w-full grow flex justify-center items-center">
        <img ref={cityRef} src={city} alt="city image" className='absolute z-10 w-full h-full'/>
        <img ref={carRef}  src={car} alt="car image" 
        className='absolute z-20 custom_car_w bottom-0 left-0'
         />
      </section>
    </main>
    </>
  )
}

export default Content