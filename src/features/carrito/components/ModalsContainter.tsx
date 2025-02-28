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
export default function ModalsContainter({ handleOpenResumen, isOpenResumen }) {
  const { carrito } = useStoreCarrito();

  console.log(carrito);
  return (
    <>
      <Dialog
        open={isOpenResumen}
        handler={handleOpenResumen}
        className="bg-black/70 h-[40rem]"
      >
        <DialogHeader>Resumen de compras</DialogHeader>
        <DialogBody className="w-full bg-blue-gray-300 h-[30rem] overflow-y-auto">
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
        <DialogFooter>
          <p>footer</p>
        </DialogFooter>
      </Dialog>
    </>
  );
}
