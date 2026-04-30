import { useEffect, useState } from "react";

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
          <div className="absolute -top-5 left-4 bg-blue-900 px-4 py-1 rounded border-2 border-white font-bold">
            {speaker}
          </div>
        )}

        <p className="text-3xl font-mono min-h-30 leading-relaxed wrap-break-word">
          {displayedText}
        </p>

        {finished && (
          <button
            onClick={onContinue}
            className="absolute cursor-pointer bottom-4 right-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded font-bold transition"
          >
            Continuar ▶
          </button>
        )}
      </div>
    </div>
  );
}

export default DialogueBox;