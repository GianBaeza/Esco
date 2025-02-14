import { ProductAdd } from "@/app/(routes)/productos/[idProd]/Interface/Interface";

export interface AuthState {
  username: string;
  accessToken: string;
  refreshToken: string;
  setLogin: (name: string, password: string) => Promise<void>;
}

export interface CarritoState {
  carrito: ProductAdd[];
  setCarrito: (producto: ProductAdd) => void;
}
