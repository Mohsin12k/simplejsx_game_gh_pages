import ClickBtn from './GameBox/ClickBtn';
import GameFile from './GameBox/GameFile';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function App() {
  const navigate = useNavigate();

  // Runs the code on load project
  useEffect(() => {
    navigate('/clickBtn');
  },[]);
  
  // calls it on click
  const startGame = () => {
    navigate('/game');
  };

  // ends it on click
  const endGame = () => {
    navigate('/clickBtn');
    reset();
  };

  // Move car code

  
  const cityRef = useRef(null);
  const carRef = useRef(null);
  let interlRf = useRef(null);
  let countRf = useRef(0);
  const speed = 10;

  const start = () => {
    if(interlRf.current !== null) return;

    const cityWidth = cityRef.current ? cityRef.current.offsetWidth : 0;
    const carWidth = carRef.current ? carRef.current.offsetWidth : 0;
    const finishLine = (cityWidth - carWidth);

    interlRf.current = setInterval(() => {
      if(countRf.current >= finishLine) {
        clearInterval(interlRf.current);
        stop();
        reset();
        return;
      }

      countRf.current +=5;

      if(carRef.current){
          carRef.current.style.left = `${countRf.current}px`;
            }
    }, speed);
  };

  const stop = () => {
    clearInterval(interlRf.current);
    interlRf.current = null;
  };

  const reset = () => {
    stop();
    countRf.current = 0;
    carRef.current.style.left = '0px';
  }
  return (
    <>
     <Routes>
      <Route path='/clickBtn' element={<ClickBtn startGame={startGame} />} />
      <Route path='/game' element={<GameFile 
       endGame={endGame}
       start={start} 
       carRef={carRef}
       cityRef={cityRef}
       stop={stop}
       reset={reset}
       />} />
     </Routes>
      </>
  )
}

export default App
