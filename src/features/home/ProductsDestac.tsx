"use client";

import { useState } from "react";
import CardProducts from "../Productos/Components/CardProducst";
import MenuNavigate from "./Components/MenuNavigate";
import { ProductsDestacProps } from "../Interface/Seccion1";

export default function ProductsDestac({ prodsDestac }: ProductsDestacProps) {
  const [producsFiltered, setProducsFiltered] = useState(prodsDestac);
  const [categoryActive, setCategoryActive] = useState("Todos");

  const handleChangeCategory = (category: string) => {
    setCategoryActive(category);
    setProducsFiltered(
      category === "Todos"
        ? prodsDestac
        : prodsDestac.filter((prod) => prod.category === category.toLowerCase())
    );
  };

  return (
    <main className="w-full h-full flex flex-col flex-wrap justify-center item-start gap-5 pt-5">
      <header className="w-full pt-1">
        <h1 className="text-2xl font-tajawal font-bold pl-7 pt-5">
          Productos destacados
        </h1>
        <MenuNavigate
          handleChangeCategory={handleChangeCategory}
          categoryActive={categoryActive}
        />
      </header>

      <section className="flex flex-wrap justify-center min-h-screen  gap-5 pt-5 ">
        {producsFiltered.map((prod) => {
          const {
            id,
            title,
            stock,
            sku,
            price,
            description,
            category,
            images,
          } = prod;

          return (
            <CardProducts
              key={id}
              title={title}
              stock={stock}
              images={images}
              sku={sku}
              price={price}
              description={description}
              category={category}
              idProducts={id}
            />
          );
        })}
      </section>
    </main>
  );
}
