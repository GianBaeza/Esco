import HomePage from "@/features/home/HomePage";
import ProductsDestac from "@/features/home/ProductsDestac";
import QuienesSomos from "@/features/home/QuienesSomos";
import TotalVentas from "@/features/home/TotalVentas";
import { Product } from "@/features/Interface/Seccion1";
import { getProductAlls } from "@/services/fetchApi";
import { ToastContainer } from "react-toastify";

export default async function Home() {
  const getAllProducts = await getProductAlls();

  const stockDestact = 30;
  const prodsDestac: Product[] = getAllProducts.filter((prod: Product) => {
    return prod.stock > stockDestact;
  });

  return (
    <div className=" w-full h-full overflow-auto bg-black">
      <ToastContainer />
      <HomePage />
      <TotalVentas />
      <ProductsDestac prodsDestac={prodsDestac} />
      <QuienesSomos />
    </div>
  );
}
