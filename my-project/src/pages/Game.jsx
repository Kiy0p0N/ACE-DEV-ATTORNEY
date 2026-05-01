import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import script from "../data/script";
import DialogueBox from "../components/DialogueBox";
import Button from "../components/Button";

import objection from "../assets/backgrounds/objection.png";

function Game() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContinue, setShowContinue] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const currentScene = script[currentIndex];

  function nextScene() {
    if (currentIndex < script.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowConfetti(true);
    }
}

  useEffect(() => {
    setShowContinue(false);

    if (currentScene.autoNext) {
      const timer = setTimeout(() => {
        nextScene();
      }, currentScene.delay || 2000);

      return () => clearTimeout(timer);
    }

    if (currentScene.evidence) {
      const timer = setTimeout(() => {
        setShowContinue(true);
      }, currentScene.continueDelay || 2000);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  if (currentScene.objection) {
    return (
      <div 
        className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${currentScene.background})` }}
      >
        <img
          src={objection}
          alt="Objection"
          className="w-auto h-4/5 object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${currentScene.background})` }}
    >
      {currentScene.evidence && (
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={currentScene.evidence}
              alt="Evidence"
              className="max-w-[70%] max-h-[70%] object-contain border-4 border-white rounded-lg shadow-2xl"
            />
          </div>

          {showContinue && (
            <Button text={"Continuar ▶"} onClick={nextScene} />
          )}
        </>
      )}

      {!currentScene.evidence && !currentScene.autoNext && (
        <DialogueBox
          speaker={currentScene.speaker}
          text={currentScene.text}
          onContinue={nextScene}
        />
      )}

      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={true}
          numberOfPieces={300}
        />
      )}
    </div>
  );
}

export default Game;