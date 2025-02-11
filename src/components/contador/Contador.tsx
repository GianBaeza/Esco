"use client";

export default function Contador({ handleClick, cantidad }) {
  return (
    <div className="flex gap-5 justify-center items-center w-full">
      <button
        onClick={() => handleClick(cantidad - 1)}
        className="bg-slate-300 px-3 rounded-lg"
      >
        {" "}
        -{" "}
      </button>
      <span>{cantidad}</span>
      <button
        onClick={() => handleClick(cantidad + 1)}
        className="bg-slate-300 px-3 rounded-lg"
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
}
