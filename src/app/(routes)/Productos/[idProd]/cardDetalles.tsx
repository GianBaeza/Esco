"use client";
import Contador from "@/components/contador/Contador";
import { useStoreCarrito, useStoreLogin } from "@/context/StoreGlobal";
import Image from "next/image";
import React, { useState } from "react";

export default function CardDetalles({ detail }) {
  const { setCarrito } = useStoreCarrito();
  const { accessToken } = useStoreLogin();
  const [cantidad, setCantidad] = useState(0);

  console.log(accessToken);
  const handleClick = (valor) => {
    if (valor < 0) return;
    setCantidad(valor);
  };

  const handleAddCarrito = () => {
    if (!accessToken) {
      alert("inicie session o registrese");

      return;
    }
    const productAdd = {
      imagen: detail.images[0],
      nombre: detail.title,
      descripcion: detail.description,
      precio: detail.price,
      cantidad: cantidad,
    };
    if (cantidad > 1) {
      productAdd.total = productAdd.precio * productAdd.cantidad;
    }
    alert(` ${productAdd.nombre}producto agregado correctamente`);
    console.log(productAdd);
    setCarrito(productAdd);
  };

  return (
    <div>
      <Image
        width={500}
        height={0}
        src={detail?.images[0] || ""}
        alt={detail?.title || "Product image"}
        className="w-full max-w-lg mx-auto rounded-xl mb-4"
      />

      <p className="text-center text-gray-600 text-lg mb-4">
        {detail.description}
      </p>

      <div className="flex justify-between items-center mb-4">
        <span className="text-xl text-green-500">${detail.price}</span>
        <span className="text-gray-500 text-sm">{detail.rating} stars</span>
      </div>

      <div className="text-center">
        <Contador handleClick={handleClick} cantidad={cantidad} />
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={handleAddCarrito}
        >
          Add to Cart
        </button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-500">Stock: {detail.stock}</p>
        <p className="text-gray-500">Warranty: {detail.warrantyInformation}</p>
      </div>
    </div>
  );
}
