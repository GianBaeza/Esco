"use client";
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useStoreCarrito } from "@/context/StoreGlobal";
import CardModal from "./CardModal";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/navigation";
import { formatPrecio } from "@/context/utilities/formatearPrecio";


interface Props{ 
  handleOpenResumen : ()=> void
  isOpenResumen : boolean
}
export default function ModalsContainter({ handleOpenResumen, isOpenResumen }: Props) {
  const { carrito,totalDelCarrito} = useStoreCarrito();
  const {refresh, push} = useRouter()

  (carrito);
  const handleBack = ()=>{
    refresh()
    handleOpenResumen()
  }
  const handleFinalizarCompra = ()=>{
    push("/carrito")
    handleOpenResumen()
  }

  const totalDelCarritoPrecio= totalDelCarrito()
  (totalDelCarritoPrecio)
  return (
      <Dialog
        open={isOpenResumen}
        handler={handleOpenResumen}
        className="bg-black/50 h-[40rem] w-14 absolute right-0 top-0"
        style={{ width: "120px", background: "transparent",opacity:0 }}
        size="xs"
      >

        <DialogHeader className="flex justify-between text-white ">Resumen de compras
          <MdClose className="cursor-pointer" color="white" onClick={handleOpenResumen}/>
        </DialogHeader>
        <DialogBody className="w-full  max-h-[27rem] overflow-y-auto">
          {carrito.length > 0 ? (
            carrito.map(({ nombre, total, cantidad, precio }, i) => {
              return (
              <CardModal key={i} nombre={nombre} total={total} cantidad={cantidad} precio={precio}/>
              );
            })
          ) : (
            <p>No hay productos</p>
          )}
        </DialogBody>
        
        <DialogFooter className=" w-full flex items-center justify-center gap-3 ">
          <h3 className="text-white font-tajawal text-lg">Total a pagar: {formatPrecio(totalDelCarritoPrecio)}</h3>
          <hr  className="bg-white h-px w-10/12 m-0"/>
          <Button className="p-1 py-3 bg-white/50" onClick={handleBack}>Seguir comprando</Button>
          <Button className="p-1 py-3 bg-white/50" onClick={handleFinalizarCompra}>Finalizar compra </Button>

        </DialogFooter>
      </Dialog>
  );
}
