"use client";

import { loginUser } from "@/components/auth/services";
import { setCookie } from "cookies-next";
import { create } from "zustand";
import { AuthState, CarritoState } from "./Interface";
import NotificacionGlobal from "@/components/alerta/NotificacionGlobal";

const useStoreLogin = create<AuthState>((set) => ({
  username: "",
  accessToken: "",
  refreshToken: "",

  setLogin: async (name, password) => {
    try {
      const response = await loginUser(name, password);
      const { accessToken, refreshToken, username } = response;
      set({ username, accessToken, refreshToken });
      if (accessToken) {
        setCookie("accessToken", accessToken);
        setCookie("username", username);
        setCookie("refreshToken", refreshToken);
      }
    } catch (error) {
      console.log(error);
      throw new Error("No se pudo iniciar sesión. Verifica tus credenciales.");
    }
  },
}));

const useStoreCarrito = create<CarritoState>((set) => ({
  carrito: [],

  setCarrito: (producto) => {
    if (!producto) return;

    set((state) => ({ carrito: [...state.carrito, producto] }));
  },
}));

export { useStoreLogin, useStoreCarrito };
