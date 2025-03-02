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
          throw error;
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
    (set, get) => ({
      carrito: [],

      // Método para agregar un producto al carrito
      setCarrito: (producto) => {
        if (!producto) return;
      
        set((state) => {
          const existingProductIndex = state.carrito.findIndex(
            (prod) => prod.nombre === producto.nombre // O cualquier otra propiedad única
          );
      
          if (existingProductIndex !== -1) {
            // Si el producto ya existe, aumentamos la cantidad
            const updatedCarrito = state.carrito.map((prod, index) => {
              if (index === existingProductIndex) {
                return {
                  ...prod,
                  cantidad: prod.cantidad + producto.cantidad, // Aumentar la cantidad según la selección
                };
              }
              return prod;
            });
            return { carrito: updatedCarrito };
          } else {
            // Si el producto no existe, lo agregamos al carrito
            return { carrito: [...state.carrito, { ...producto, cantidad: producto.cantidad }] }; // Asignar la cantidad seleccionada
          }
        });
      },
      totalDelCarrito:()=>{
        const {carrito} = get()
        if(carrito.length <= 0 ) return 0
        const total =  carrito.reduce((acc,act)=> acc + act.total, 0 )
        return Number(total.toFixed(2))
      },
      deleteProduct:(nombre:string)=>{
         set((state)=> ({carrito: state.carrito.filter((prod)=> prod.nombre !== nombre )}))
      }
    }),
    
    {
      name: "carrito-compras", // Nombre para el almacenamiento persistente del carrito
      storage: createJSONStorage(() => localStorage), // Usamos localStorage para persistencia
    }
  )
);

export { useStoreLogin, useStoreCarrito };
