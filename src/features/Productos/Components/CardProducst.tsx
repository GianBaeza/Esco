import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CarouselCustomNavigation } from "@/components/Carousel/CarouselCustomNavigation";
import { Gallery } from "@/components/Carousel/Carousel";
interface Props {
  idProducts: number;
  title: string;
  stock: number;
  images: string[];
  sku: string;
  price: number;
  description: string;
  category: string;
}

export default function CardProducts({
  idProducts,
  title,
  stock,
  images,
  price,
  category,
}: Props) {
  return (
    <>
      {" "}
      <figure
        className="w
        full flex flex-col items-center justify-center  colorTexto"
      >
        <Gallery images={images} />

        <figcaption className="font-tajawal colorTexto">{title}</figcaption>
      </figure>
      <p className="font-tajawal colorTexto ">
        <strong>Category:</strong> {category}
      </p>
      <span className="flex flex-col gap-2">
        <p className="font-tajawal colorTexto">
          <strong>Price:</strong> ${price} | <strong>Stock:</strong> {stock}
        </p>
        <p className="font-tajawal colorTextoOpacity">
          <strong>Stock:</strong> {stock}
        </p>
      </span>
      <footer>
        <Link href={`/productos/${idProducts}`}>
          <button className="py-1 px-2 bg-traparent text-white rounded  border border-white ">
            Ver detalles
          </button>
        </Link>
      </footer>
    </>
  );
}
