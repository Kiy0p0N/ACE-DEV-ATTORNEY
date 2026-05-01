function Button({text, onClick}){
    return (
        <button
            onClick={onClick}
            className="absolute cursor-pointer bottom-4 right-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded font-bold transition"
          >
            {text}
          </button>
    );
}

export default Button;