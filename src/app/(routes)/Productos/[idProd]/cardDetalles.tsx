"use client";
import Contador from "@/components/contador/Contador";
import { useStoreCarrito, useStoreLogin } from "@/context/StoreGlobal";
import React, { useState } from "react";
import { ProductAdd, ProductDetalle } from "./Interface/Interface";
import EmblaCarousel from "@/components/CarouselDetallesProd/EmblaCarousel";

interface Props {
  detallesDelProducto: ProductDetalle;
}

export default function CardDetalles({ detallesDelProducto }: Props) {
  const { setCarrito } = useStoreCarrito();
  const { accessToken } = useStoreLogin();
  const [cantidad, setCantidad] = useState(0);

  if (!detallesDelProducto) {
    return <p>Producto no encontrado</p>;
  }

  const {
    images,
    title,
    description,
    price,
    rating,
    stock,
    warrantyInformation,
  } = detallesDelProducto;

  const handleClick = (valor: number) => {
    if (valor < 0 || stock <= 0) return;
    setCantidad(valor);
  };

  const handleAddCarrito = () => {
    if (!accessToken) {
      alert("Inicie sesión o regístrese");
      return;
    }

    const productAdd: ProductAdd = {
      imagen: images[0],
      nombre: title,
      descripcion: description,
      precio: price,
      cantidad: cantidad,
      total: price * cantidad,
    };

    alert(`${productAdd.nombre} agregado correctamente`);
    setCarrito(productAdd);
  };

  console.log(detallesDelProducto);

  console.log(images, "IMAGENES");
  return (
    <div className="flex flex-col md:flex-row w-full lg:w-10/12 lg:m-auto items-center justify-center md:justify-between">
      <div className="w-5/12">
        <EmblaCarousel images={images} />
      </div>

      <section className="flex flex-col gap-3 items-center md:items-start w-full lg:w-6/12 min-h-[25rem] lg:p-6 bg-white">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-left text-base mb-4">{description}</p>
        <span className="text-2xl font-bold text-green-500">${price}</span>
        <span className="text-gray-400 text-sm">{rating} stars</span>
        <p className="text-gray-500 text-sm">
          Stock: {stock <= 0 ? "No hay stock" : stock}
        </p>
        <p className="text-gray-500 text-sm">Warranty: {warrantyInformation}</p>

        <div className="flex flex-col items-start gap-3 w-auto mt-4">
          <Contador handleClick={handleClick} cantidad={cantidad} />
          <div className="flex md:flex-row flex-col gap-5">
            <button
              className="text-black hover:text-white border py-1 px-3 rounded-lg hover:bg-gray-600 transition duration-300"
              onClick={handleAddCarrito}
            >
              Agregar al carrito
            </button>
            <button className="text-black hover:text-white border py-1 px-3 rounded-lg hover:bg-gray-600 transition duration-300">
              Comprar ahora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
