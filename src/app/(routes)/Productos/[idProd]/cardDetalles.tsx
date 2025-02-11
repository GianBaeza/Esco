"use client";
import Contador from "@/components/contador/Contador";
import { useStoreCarrito, useStoreLogin } from "@/context/StoreGlobal";
import Image from "next/image";
import React, { useState } from "react";

export default function CardDetalles({ detail }) {
  const { setCarrito } = useStoreCarrito();
  const { accessToken } = useStoreLogin();
  const [cantidad, setCantidad] = useState(0);

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
    <div className="bg-red-200 flex w-10/12 m-auto items-center  justify-between">
      <Image
        width={500}
        height={0}
        src={detail?.images[0] || ""}
        alt={detail?.title || "Product image"}
        className="w-full max-w-lg mx-auto rounded-xl mb-4"
      />

      <section className="flex flex-col gap-3 items-start justify-start w-6/12 min-h-[25rem] p-6  bg-white">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {detail.title}
        </h2>
        <p className="text-gray-600 text-left text-base mb-4">
          {detail.description}
        </p>
        <span className="text-2xl font-bold text-green-500">
          ${detail.price}
        </span>
        <span className="text-gray-400 text-sm">{detail.rating} stars</span>
        <p className="text-gray-500 text-sm">Stock: {detail.stock}</p>
        <p className="text-gray-500 text-sm">
          Warranty: {detail.warrantyInformation}
        </p>

        <div className="flex flex-col items-start gap-3 w-auto mt-4  ">
          <Contador handleClick={handleClick} cantidad={cantidad} />
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
            Add to Cart
          </button>
        </div>
      </section>
    </div>
  );
}
