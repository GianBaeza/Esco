import LoaderGlobal from "@/components/loaderGlobal/LoaderGlobal";
import ContentAllProducts from "@/features/Productos/Components/ContentAllProducts";
import { getProductAlls } from "@/services/fetchApi";
import React, { Suspense } from "react";

export default async function Home() {
  const productos_All = (await getProductAlls()) || [];
  return (
    <div className=" h-auto w-full">
      <Suspense fallback={<LoaderGlobal />}>
        <ContentAllProducts allProducts={productos_All} />
      </Suspense>
    </div>
  );
}
