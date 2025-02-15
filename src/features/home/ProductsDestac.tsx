"use client";

import { useState } from "react";
import CardProducts from "../Productos/Components/CardProducst";
import MenuNavigate from "./Components/MenuNavigate";
import { ProductsDestacProps } from "../Interface/Seccion1";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";

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
    <main className="w-full h-full flex flex-col flex-wrap justify-center item-start gap-5 pt-5 bg-black">
      <header className="w-10/12 pt-1 m-auto">
        <article className="w-full flex items-center justify-evenly pt-5">
          <h1 className="text-3xl font-tajawal font-bold pl-7 text-white">
            Productos destacados
          </h1>
          <hr className=" h-px bg-black  w-7/12" />
        </article>
        <MenuNavigate
          handleChangeCategory={handleChangeCategory}
          categoryActive={categoryActive}
        />
      </header>

      <section className="flex flex-wrap justify-center min-h-screen lg:w-10/12 m-auto gap-5 pt-5 ">
        {producsFiltered.slice(0, 6).map((prod) => {
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
            <SpotlightCard
              className="custom-spotlight-card h-[30rem] bg-gray-200  border-none"
              spotlightColor="rgba(0, 0, 0, 0.30)" // Negro suave
              key={id}
            >
              <div className=" flex w-[20rem] max-h[30rem] p-5">
                <CardProducts
                  title={title}
                  stock={stock}
                  images={images}
                  sku={sku}
                  price={price}
                  description={description}
                  category={category}
                  idProducts={id}
                />
              </div>
            </SpotlightCard>
          );
        })}
      </section>
    </main>
  );
}
