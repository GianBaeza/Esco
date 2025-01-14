"use client";
import React from "react";
import { GradualSpacing } from "@/components/eldoraui/gradualspacing";
import { Button } from "@material-tailwind/react";
import ButtonDefault from "@/shared-ui/ButtonDefault";

export default function Seccion1() {
  return (
    <main className="w-full h-screen bg-cover bg-center relative flex">
      <div className="absolute top-0 left-0 w-full h-full bg-background-home-seccion1 bg-cover bg-center filter brightness-50 "></div>

      <section className="flex flex-col items-start pt-64 pl-44 w-9/12 h-full text-white font">
        {/* Título */}
        <GradualSpacing
          text="Bienvenidos a la tienda"
          className="text-4xl font-semibold font-lora"
        />

        {/* Descripción */}
        <p className="mt-4 text-lg max-w-2xl z-10 font-lora">
          Descubre productos exclusivos, ofertas increíbles y más, solo en
          nuestra tienda online. ¡Explora, compra y disfruta de un servicio
          rápido y seguro!
        </p>
      </section>

      <article className="h-full w-4/12  flex  gap-5 items-end justify-center z-10 pb-72 pr-72">
        <ButtonDefault className="">Productos</ButtonDefault>
        <ButtonDefault className="">Contacto</ButtonDefault>
      </article>
    </main>
  );
}
