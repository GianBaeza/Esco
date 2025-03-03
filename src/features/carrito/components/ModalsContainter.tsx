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

interface Props {
  handleOpenResumenAction: () => void;
  isOpenResumen: boolean;
}

export default function ModalsContainter({
  handleOpenResumenAction,
  isOpenResumen,
}: Props) {
  const { carrito, totalDelCarrito } = useStoreCarrito();
  const { refresh, push } = useRouter();

  const handleBack = () => {
    refresh();
    handleOpenResumenAction();
  };

  const handleFinalizarCompra = () => {
    push("/carrito");
    handleOpenResumenAction();
  };

  const totalDelCarritoPrecio = totalDelCarrito();

  return (
    <Dialog
      open={isOpenResumen}
      handler={handleOpenResumenAction} // Cambia el nombre aquí
      className="bg-black/50 h-[40rem] w-14 absolute right-0 top-0"
      style={{ width: "120px", background: "transparent", opacity: 0 }}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      size="xs"
    >
      <DialogHeader
        className="flex justify-between text-white"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Resumen de compras
        <MdClose
          className="cursor-pointer"
          color="white"
          onClick={handleOpenResumenAction} // Cambia el nombre aquí
        />
      </DialogHeader>
      <DialogBody
        className="w-full max-h-[27rem] overflow-y-auto"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {carrito.length > 0 ? (
          carrito.map(({ nombre, total, cantidad, precio }, i) => (
            <CardModal
              key={i}
              nombre={nombre}
              total={total}
              cantidad={cantidad}
              precio={precio}
            />
          ))
        ) : (
          <p>No hay productos</p>
        )}
      </DialogBody>

      <DialogFooter
        className={`${
          carrito.length <= 0 ? "hidden" : "flex"
        } w-full items-center justify-center gap-3`}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <h3 className="text-white font-tajawal text-lg">
          Total a pagar: {formatPrecio(totalDelCarritoPrecio)}
        </h3>
        <hr className="bg-white h-px w-10/12 m-0" />
        <Button
          className={"p-1 py-3 bg-white/50"}
          onClick={handleBack}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Seguir comprando
        </Button>
        <Button
          className={"p-1 py-3 bg-white/50"}
          onClick={handleFinalizarCompra}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Finalizar compra
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
