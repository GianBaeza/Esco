import HomePage from "@/features/home/HomePage";
import ProductsDestac from "@/features/home/ProductsDestac";
import QuienesSomos from "@/features/home/QuienesSomos";
import TotalVentas from "@/features/home/TotalVentas";
import { Product } from "@/features/Interface/Seccion1";
import { getProductAlls } from "@/services/fetchApi";
import { ToastContainer } from "react-toastify";

const avisos = {
  envio: {
    nombre: "Envío a todo el país",
    icono: "🚚", // Camión de reparto
  },
  pagoSeguro: {
    nombre: "Pago 100% Seguro",
    icono: "💳", // Tarjeta de crédito
  },
  atencionCliente: {
    nombre: "Atención al cliente 24/7",
    icono: "📞", // Teléfono
  },
  devolucion: {
    nombre: "Devolución garantizada",
    icono: "⚖️", // Balanza de justicia
  },
  calidad: {
    nombre: "Calidad garantizada",
    icono: "🌟", // Estrella
  },
};
export default async function Home() {
  const getAllProducts = await getProductAlls();

  const stockDestact = 30;
  const prodsDestac: Product[] = getAllProducts.filter((prod: Product) => {
    return prod.stock > stockDestact;
  });

  return (
    <div className=" w-full h-full overflow-auto bg-black flex flex-col items-center">
      <ToastContainer />
      <HomePage />
      <TotalVentas />
      <ProductsDestac prodsDestac={prodsDestac} />
      <article className="bg-red-300 w-10/12 max-h-[20rem] p-5 flex items-center gap-5 justify-center">
        {Object.values(avisos).map((aviso, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-center relative group hover:scale-110 hover:transition-transform hover:duration-300"
            >
              <p className="text-white text-4xl mb-2">{aviso.icono}</p>
              <h1 className="text-xl font-bold text-white group-hover:text-2xl group-hover:text-cyan-200 transition-all ease-out">
                {aviso.nombre}
              </h1>
            </div>
          );
        })}
      </article>
      <QuienesSomos />
    </div>
  );
}
