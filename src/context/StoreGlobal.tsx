"use client";

import { loginUser } from "@/components/auth/services";
import { setCookie } from "cookies-next";
import { create } from "zustand";

// Define la estructura del estado
interface AuthState {
  username: string;
  accessToken: string;
  refreshToken: string;
  setLogin: (name: string, password: string) => Promise<void>;
}

// Implementación del store con Zustand
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
    } catch (error: any) {
      console.error("Error al iniciar sesión:", error.message);
      throw new Error("No se pudo iniciar sesión. Verifica tus credenciales.");
    }
  },
}));

export default useStoreLogin;
