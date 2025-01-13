import { getProductAlls } from "@/services_api/fetchApi";
import Image from "next/image";

export default async function App() {
  const productos_All = await getProductAlls();

  return (
    <div className="bg-green-200 w-full h-screen overflow-auto">
      {productos_All.length > 0 ? (
        productos_All.map((prod) => (
          <div key={prod.id} className="p-4 border-b border-gray-300">
            <div className="flex gap-4">
              {prod.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  width={100}
                  height={100}
                  alt={`Product image ${i + 1} of ${prod.title}`}
                  className="object-cover rounded"
                />
              ))}
            </div>
            <h2 className="text-lg font-bold mt-2">{prod.title}</h2>
            <p>{prod.description}</p>
            <p className="text-sm text-gray-500">Price: ${prod.price}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-700">No products available</p>
      )}
    </div>
  );
}
