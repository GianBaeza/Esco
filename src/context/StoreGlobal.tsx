"use client";

import { loginUser } from "@/components/auth/services";
import { deleteCookie, setCookie } from "cookies-next";
import { create } from "zustand";
import { AuthState, CarritoState } from "./Interface";
import { persist, createJSONStorage } from "zustand/middleware";

const useStoreLogin = create<AuthState>()(
  persist(
    (set) => ({
      username: "",
      accessToken: "",
      refreshToken: "",
      loading: false,

      // Método para realizar el login y almacenar los tokens
      setLogin: async (name, password) => {
        set({ loading: true });
        try {
          const response = await loginUser(name, password);
          const { accessToken, refreshToken, username } = response;

          // Si se obtiene un accessToken, establecemos las cookies
          if (accessToken) {
            setCookie("accessToken", accessToken);
            setCookie("username", username);
            setCookie("refreshToken", refreshToken);
          }

          // Establecer los datos en la tienda (zustand)
          set({ username, accessToken, refreshToken });
        } catch (error) {
          console.log(error);
          throw new Error(
            "No se pudo iniciar sesión. Verifica tus credenciales."
          );
        } finally {
          set({ loading: false });
        }
      },
      logOut: () => {
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
        deleteCookie("username");
        set({ username: "", accessToken: "", refreshToken: "" });
        localStorage.clear();
        return true;
      },

      // Método para cargar los datos persistidos desde las cookies
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// Store para el carrito con persistencia
const useStoreCarrito = create<CarritoState>()(
  persist(
    (set) => ({
      carrito: [],

      // Método para agregar un producto al carrito
      setCarrito: (producto) => {
        if (!producto) return;

        set((state) => ({ carrito: [...state.carrito, producto] }));
      },
    }),
    {
      name: "carrito-compras", // Nombre para el almacenamiento persistente del carrito
      storage: createJSONStorage(() => localStorage), // Usamos localStorage para persistencia
    }
  )
);

export { useStoreLogin, useStoreCarrito };
