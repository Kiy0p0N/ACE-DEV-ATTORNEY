import { useEffect, useState } from "react";
import Button from "./Button";

function DialogueBox({ text = "", speaker, onContinue }) {
  const [displayedText, setDisplayedText] = useState("");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setFinished(false);

    let index = 0;

    const interval = setInterval(() => {
      if (index >= text.length) {
        clearInterval(interval);
        setFinished(true);
        return;
      }

      setDisplayedText(text.slice(0, index + 1));
      index++;
    }, 35);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="absolute bottom-0 w-full flex justify-center pb-6">
      <div className="w-[90%] max-w-5xl bg-[#081225] border-4 border-white rounded-lg p-6 text-white relative shadow-2xl">
        {speaker && (
          <div className="absolute -top-5 left-4 bg-blue-900 px-4 py-1 rounded border-2 border-white font-bold text-xl">
            {speaker}
          </div>
        )}

        <p className="text-3xl w-3/4 min-h-30 leading-relaxed wrap-break-word">
          {displayedText}
        </p>

        {finished && (
          <Button text={"Continuar ▶"} onClick={onContinue} />
        )}
      </div>
    </div>
  );
}

export default DialogueBox;