import HomePage from "@/features/home/HomePage";
import ProductsDestac from "@/features/home/ProductsDestac";
import QuienesSomos from "@/features/home/QuienesSomos";
import { Product } from "@/features/Interface/Seccion1";
import { getProductAlls } from "@/services_api/fetchApi";
import { ToastContainer } from "react-toastify";

export default async function App() {
  const getAllProducts = await getProductAlls();

  const stockDestact = 30;
  const prodsDestac: Product[] = getAllProducts.filter((prod) => {
    return prod.stock > stockDestact;
  });

  return (
    <div className=" w-full h-full overflow-auto">
      <ToastContainer />
      <HomePage />
      <ProductsDestac prodsDestac={prodsDestac} />
      <QuienesSomos />
    </div>
  );
}
