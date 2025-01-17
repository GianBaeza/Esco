"use client";
import React, { useState } from "react";
import CardProducst from "./CardProducst";

export default function ContentAllProducts({ productos_All }) {
  const productsPerPage = 10; // Cantidad de productos por página
  const [currentPage, setCurrentPage] = useState(1); // Página actual

  // Calcular el índice de inicio y final para los productos de la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productos_All.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(productos_All.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <main className="bg-red-200 w-full h-full p-5 flex flex-wrap gap-5 justify-center">
        {currentProducts.map((prod) => {
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
            <CardProducst
              key={id}
              title={title}
              stock={stock}
              images={images}
              sku={sku}
              price={price}
              description={description}
              category={category}
            />
          );
        })}
      </main>

      {/* Paginación */}
      <div className="flex justify-center gap-4 py-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`p-2 bg-blue-500 text-white rounded ${
              currentPage === index + 1 ? "bg-blue-700" : "hover:bg-blue-600"
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
