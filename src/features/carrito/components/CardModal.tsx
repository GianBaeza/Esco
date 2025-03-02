import { useStoreCarrito } from "@/context/StoreGlobal";
import { formatPrecio } from "@/context/utilities/formatearPrecio";
import React from "react";
import { MdDeleteForever } from "react-icons/md";

export default function CardModal({ nombre, cantidad, precio, total }) {
  const   {deleteProduct} = useStoreCarrito()
  return (
    <div className="flex items-center border border-white  justify-between rounded p-1">
     <article className="flex flex-col items-start justify-center">
     <h4 className="font-tajawal text-base text-white/80">{nombre}</h4>
      <p className="font-tajawal text-sm text-white/80">Cantidad: {cantidad}</p>
      <p className="font-tajawal text-sm text-white/80">Precio: {cantidad > 1 ? formatPrecio(total) : formatPrecio(precio)}</p>
     </article>
      <MdDeleteForever  size={20} className="cursor-pointer text-white hover:text-red-300" onClick={()=> deleteProduct(nombre)}/>
      
    </div>
  );
}
