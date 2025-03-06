"use client";
import { useStoreCarrito } from "@/context/StoreGlobal";
import React from "react";

export default function Carrito() {
  const { carrito } = useStoreCarrito();

  return (
    <>
      {carrito.length > 0 ? (
        carrito.map((item, i) => {
          return <p key={i}>{item.nombre}</p>;
        })
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </>
  );
}
