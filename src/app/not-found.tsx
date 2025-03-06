"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function RutaNoEncontrada() {
  const { back } = useRouter();
  return (
    <div className="w-full h-full flex items-center justify-center">
      <h1 className="text-white pt-56 font-lora font-semibold text-2xl">
        Pagina no encontrada...
      </h1>
      <button className="text-white font-bold text-xl" onClick={() => back()}>
        {" "}
        Volver atras..
      </button>
    </div>
  );
}
