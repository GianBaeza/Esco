import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  console.log(images, " DESDE IMAGES");
  return (
    <>
      {" "}
      <figure
        className="w
        full flex flex-col items-center justify-center  colorTexto"
      >
        <Image
          src={images[0]}
          alt={`Image of ${title}`}
          width={250}
          height={200}
          className="object-cover rounded-md z-10"
        />
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
