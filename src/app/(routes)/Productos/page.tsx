import { ProductResponse } from "@/features/Interface/Seccion1";
import ContentAllProducts from "@/features/Productos/Components/ContentAllProducts";
import { getProductAlls } from "@/services_api/fetchApi";
import React, { Suspense } from "react";

export default async function Home() {
  const productos_All: ProductResponse = (await getProductAlls()) || [];
  return (
    <div className=" h-auto w-full">
      <Suspense fallback={<div>loading...</div>}>
        <ContentAllProducts allProducts={productos_All} />
      </Suspense>
    </div>
  );
}
