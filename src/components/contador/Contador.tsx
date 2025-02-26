interface ContadorProps {
  handleClick: (cantidad: number) => void;
  cantidad: number;
}

export default function Contador({ handleClick, cantidad }: ContadorProps) {
  return (
    <div className="flex gap-5 justify-start items-center w-full">
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
