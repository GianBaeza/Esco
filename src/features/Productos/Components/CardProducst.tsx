"USE CLIENT";

import React from "react";
import Image from "next/image";
interface Props {
  title: string;
  stock: number;
  images: string[]; // Asumiendo que las imágenes son cadenas de texto (URLs o rutas)
  sku: string;
  price: number;
  description: string;
  category: string;
}

export default function CardProducts({
  title,
  stock,
  images,
  sku,
  price,
  description,
  category,
}: Props) {
  return (
    <article className="bg-slate-600/20 w-80  h-[25rem] p-4  rounded-md shadow-lg">
      <header>
        <figure
          className="w
        full flex flex-col items-center justify-center"
        >
          <Image
            src={images[0]}
            alt={`Image of ${title}`}
            width={100}
            height={200}
            className="object-cover rounded-md"
          />
          <figcaption>{title}</figcaption>
        </figure>
      </header>

      <section>
        <h2>{title}</h2>
        <p>
          <strong>Category:</strong> {category}
        </p>
        <p>{description}</p>
      </section>

      <footer>
        <p>
          <strong>Price:</strong> ${price} | <strong>Stock:</strong> {stock}
        </p>
        <p>
          <strong>SKU:</strong> {sku}
        </p>
      </footer>
    </article>
  );
}
