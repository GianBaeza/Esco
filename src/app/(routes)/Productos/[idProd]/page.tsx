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
  const { title } = detail;

  return (
    <div className="w-full h-screen m-auto bg-white shadow-lg rounded-lg">
      <main className="w-11/12  m-auto pt-10">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Detalles de {title}
        </h1>
        <CardDetalles detail={detail} />
      </main>
    </div>
  );
}
