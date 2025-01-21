import Image from "next/image";
import React from "react";

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

      <Image
        width={500}
        height={0}
        src={detail?.images[0] || ""}
        alt={detail?.title || "Product image"}
        className="w-full max-w-lg mx-auto rounded-xl mb-4"
      />

      <p className="text-center text-gray-600 text-lg mb-4">
        {detail.description}
      </p>

      <div className="flex justify-between items-center mb-4">
        <span className="text-xl text-green-500">${detail.price}</span>
        <span className="text-gray-500 text-sm">{detail.rating} stars</span>
      </div>

      <div className="text-center">
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
          Add to Cart
        </button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-500">Stock: {detail.stock}</p>
        <p className="text-gray-500">Warranty: {detail.warrantyInformation}</p>
      </div>
    </div>
  );
}
