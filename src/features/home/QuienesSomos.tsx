import Image from "next/image";
import React from "react";

export default function QuienesSomos() {
  return (
    <main className="w-10/12 flex justify-center m-auto bg-white py-12">
      <div className="w-8/12 relative  flex items-center gap-2">
        {/* Contenedor de la imagen con posición relativa */}
        <div className="relative w-11/12 h-[700px] m-auto ">
          <Image
            src={"/quienesSomos.jpg"}
            alt="Quienes somos"
            className="rounded-lg pl-5"
            width={450}
            height={200}
          />
          {/* Título sobrepuesto */}
          <h2 className="absolute w-full top-20 left-[25rem] transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white bg-black bg-opacity-50 px-6 py-3 rounded-lg">
            TITULO SOBRE PUESTO
          </h2>
        </div>
        <p className="mt-8 text-gray-700 text-lg leading-relaxed  text-start ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
          dignissimos rerum maiores nulla autem atque delectus, omnis dicta,
          deleniti ex quia quasi vitae possimus labore nobis minus sed iusto
          optio?
        </p>
      </div>
    </main>
  );
}
