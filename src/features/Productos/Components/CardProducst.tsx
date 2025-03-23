import React from "react";
import Link from "next/link";
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
    <div className="  flex flex-col justify-center items-start h-auto w-full">
      {" "}
      <Gallery
        images={title !== "Calvin Klein CK One" ? images : images.slice(1, 3)}
      />
      <section className=" w-full flex flex-col items-start">
        <h4 className="font-tajawal colorTexto m-auto">{title}</h4>
        <p className="font-tajawal colorTexto pl-5 ">
          <strong>Category:</strong> {category}
        </p>
        <span className="flex flex-col gap-2 pl-5 ">
          <p className="font-tajawal colorTexto">
            <strong>Price:</strong> ${price} | <strong>Stock:</strong> {stock}
          </p>
          <p className="font-tajawal colorTextoOpacity">
            <strong>Stock:</strong> {stock}
          </p>
        </span>
      </section>
      <footer className="pl-5 ">
        <Link href={`/productos/${idProducts}`}>
          <button className="py-1 px-2 bg-traparent bg-black/10 rounded  border border-white hover:bg-slate-300  hover:text-gray-800 transition-all ease-in-out duration-300">
            Ver detalles
          </button>
        </Link>
      </footer>
    </div>
  );
}
