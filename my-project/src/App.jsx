import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef } from "react";

import StartScreen from "./pages/StartScreen";
import Game from "./pages/Game";

import bgMusic from "./assets/sounds/ace-attorney-game-sound.mp3";

function App() {
  const audioRef = useRef(null);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current.play();
    }
  };

  return (
    <BrowserRouter>
      {/* Áudio global */}
      {/* <audio ref={audioRef} loop>
        <source src={bgMusic} type="audio/mp3" />
      </audio> */}

      <Routes>
        <Route path="/" element={<StartScreen onStart={playMusic} />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;