import ProductsDestac from "@/features/home/ProductsDestac";
import Seccion1 from "@/features/home/Seccion1";
import { Product } from "@/features/Interface/Seccion1";
import { getProductAlls } from "@/services_api/fetchApi";

export default async function App() {
  const getAllProducts = await getProductAlls();

  const stockDestact = 30;
  const prodsDestac: Product[] = getAllProducts.filter((prod) => {
    return prod.stock > stockDestact;
  });
  return (
    <>
      <div className=" w-full h-full overflow-auto">
        <Seccion1 />
        <ProductsDestac prodsDestac={prodsDestac} />
      </div>
    </>
  );
}
