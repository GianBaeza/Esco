import Seccion1 from "@/features/home/Seccion1";
import { ProductResponse } from "@/features/Interface/Seccion1";
import { getProductAlls } from "@/services_api/fetchApi";

export default async function App() {
  const productos_All: ProductResponse = await getProductAlls();

  return (
    <div className="bg-green-200 w-full h-screen overflow-auto">
      <Seccion1 />
    </div>
  );
}
