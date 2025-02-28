import { formatPrecio } from "@/context/utilities/formatearPrecio";
import React from "react";

export default function CardModal({ nombre, cantidad, precio, total }) {
  return (
    <div className="flex items-start border border-white flex-col justify-center rounded p-1">
      <h4>{nombre}</h4>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: {formatPrecio(precio)}</p>
      {cantidad > 1 && <p>{formatPrecio(total)}</p>}{" "}
    </div>
  );
}
