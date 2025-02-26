"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Notificacion = ({
  valor,
  textoNotificacion,
}: {
  valor: string;
  textoNotificacion: string;
}) => {
  return toast(textoNotificacion, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: true,
    theme: valor !== "verde" ? "dark" : "light",
    style: {
      background: valor !== "verde" ? "#ff4d4d" : "#4CAF50",
      color: "#fff",
    },
  });
};
