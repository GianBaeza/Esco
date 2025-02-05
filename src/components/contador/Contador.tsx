"use client";

export default function Contador({ handleClick, cantidad }) {
  return (
    <div className=" flex items-center justify-center gap-8 m-auto p-1 w-auto">
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
