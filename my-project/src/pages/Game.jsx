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

  const [choiceResponse, setChoiceResponse] = useState(null);

  function handleChoice(choice) {
    setChoiceResponse(choice.response);

    setTimeout(() => {
      setChoiceResponse(null);
      nextScene();
    }, 2000);
  }

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

          {showContinue && <Button text={"Continuar ▶"} onClick={nextScene} />}
        </>
      )}

      {currentScene.choices && (
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="relative bg-black/70 border-4 border-white rounded-xl p-8 pt-12 flex flex-col gap-8 shadow-2xl min-w-125">
            <div className="absolute -top-5 left-4 bg-blue-900 px-4 py-1 rounded border-2 border-white font-bold text-white">
              Júri: Turma IEPG01
            </div>

            {currentScene.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => handleChoice(choice)}
                className="cursor-pointer px-12 py-6 text-3xl font-bold bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition"
              >
                {choice.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {!currentScene.evidence && !currentScene.autoNext && (
        <DialogueBox
          speaker={currentScene.speaker}
          text={currentScene.text}
          audio={currentScene.audio}
          onContinue={!currentScene.choices ? nextScene : null}
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
