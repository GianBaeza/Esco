"use client";

import { loginUser } from "@/components/auth/services";
import { setCookie } from "cookies-next";
import { create } from "zustand";

interface AuthState {
  username: string;
  accessToken: string;
  refreshToken: string;
  setLogin: (name: string, password: string) => Promise<void>;
}

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
      throw new Error("No se pudo iniciar sesión. Verifica tus credenciales.");
    }
  },
}));

export { useStoreLogin };
