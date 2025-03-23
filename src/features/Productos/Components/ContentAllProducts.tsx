"use client";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import CardProducts from "./CardProducst";
import { Product } from "@/features/Interface/Seccion1";
import Filters from "./Filters";
import { useMemo, useState } from "react";

interface Props {
  allProducts: Product[];
}

export default function ContentAllProducts({ allProducts }: Props) {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value.trim());
  };

  const filtradoPorQuery = useMemo(() => {
    return allProducts.filter((prod) => {
      return Object.values(prod).some((value) =>
        String(value).toLowerCase().includes(query.toLowerCase())
      );
    });
  }, [query, allProducts]);

  return (
    <div>
      <Filters onChange={handleChange} />
      <main className=" w-full h-full p-5 flex flex-wrap gap-5 justify-center">
        {filtradoPorQuery.length > 0
          ? filtradoPorQuery.map((prod) => {
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
                  className="custom-spotlight-card "
                  spotlightColor="rgba(222, 222, 222, 0.2)"
                  key={id}
                >
                  <div className=" flex w-[20rem] h-auto p-5">
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
            })
          : "No se encontro el producto"}
      </main>
    </div>
  );
}
