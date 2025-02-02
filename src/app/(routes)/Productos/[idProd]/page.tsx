import React from "react";
import CardDetalles from "./cardDetalles";

const getDetailProdcts = async (idProd) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${idProd}`);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function Page({ params }) {
  const { idProd } = params;

  const detail = (await getDetailProdcts(idProd)) || [];

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white shadow-lg rounded-lg mt-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
        Eyeshadow Palette with Mirror
      </h1>
      <CardDetalles detail={detail} />
    </div>
  );
}
