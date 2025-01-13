import { getProductAlls } from "@/services_api/fetchApi";

export default async function App() {
  const productos_All = await getProductAlls();

  return (
    <div className="bg-green-200 w-full h-screen">
      {productos_All.length > 0 ? (
        productos_All.map((prod, index) => (
          <div key={index} className="p-4 border-b border-gray-300">
            <h2 className="text-lg font-bold">{prod.title}</h2>
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
