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
  return (
    <article className="bg-slate-600/20 w-80  h-[25rem] p-4   rounded-md shadow-lg">
      <header>
        <figure
          className="w
        full flex flex-col items-center justify-center"
        >
          <Image
            src={images[0]}
            alt={`Image of ${title}`}
            width={250}
            height={200}
            className="object-cover rounded-md"
          />
          <figcaption className="font-tajawal">{title}</figcaption>
        </figure>
      </header>

      <section>
        <p className="font-tajawal">
          <strong>Category:</strong> {category}
        </p>
      </section>

      <footer>
        <p>
          <strong>Price:</strong> ${price} | <strong>Stock:</strong> {stock}
        </p>
        <Link href={`/productos/${idProducts}`}>
          <button className="p-2 bg-green-500 text-white rounded">
            Ver detalles
          </button>
        </Link>
      </footer>
    </article>
  );
}
