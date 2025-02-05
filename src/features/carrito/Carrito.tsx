"use client";
import { useStoreCarrito } from "@/context/StoreGlobal";
import React from "react";

export default function Carrito() {
  const { carrito } = useStoreCarrito();

  console.log(carrito);

  return (
    <>
      {carrito.length > 0 ? (
        carrito.map((item) => {
          return <p key={item.id}>{item.nombre}</p>;
        })
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </>
  );
}
