import React from "react";
import CardDetalles from "./cardDetalles";
import ReviewsProducst from "@/features/detallesProducto/components/ReviewsProducst";

const getDetailProdcts = async (idProd: number) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${idProd}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Page(params: { idProd: number }) {
  const { idProd } = params;

  const detail = (await getDetailProdcts(idProd)) || [];
  const { title, reviews } = detail;

  return (
    <div className="w-full min-h-screen m-auto bg-white shadow-lg rounded-lg">
      <main className=" md:w-full lg:w-11/12  m-auto pt-44 lg:pt-10">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Detalles de {title}
        </h1>
        <section className="flex flex-col gap-5">
          <CardDetalles detallesDelProducto={detail} />
          <ReviewsProducst reviewsProd={reviews} />
        </section>
      </main>
    </div>
  );
}
