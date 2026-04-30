import { useRef } from "react";
import { useNavigate } from "react-router-dom";

// imports corretos
import bgImage from "../assets/backgrounds/courtroom.png";

function StartScreen({ onStart }) {
  const navigate = useNavigate();

  const handleStart = () => {
    onStart();

    // navega para a nova página
    navigate("/game");
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex flex-col items-center justify-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/90 z-0"></div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl text-white font-bold mb-10 drop-shadow-lg capitalize">
          Roube como um artista
        </h1>

        <button
          onClick={handleStart}
          className="px-8 py-4 text-xl bg-blue-600 cursor-pointer hover:bg-blue-700 text-white rounded-2xl shadow-lg transition-all duration-300"
        >
          Start
        </button>
      </div>
    </div>
  );
}

export default StartScreen;