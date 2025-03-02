import { ProductAdd } from "@/app/(routes)/productos/[idProd]/Interface/Interface";

export interface AuthState {
  username: string;
  accessToken: string;
  refreshToken: string;
  loading: boolean;
  setLogin: (name: string, password: string) => Promise<void>;
  logOut: () => boolean;
}

export interface CarritoState {
  carrito: ProductAdd[];
  setCarrito: (producto: ProductAdd) => void;
  totalDelCarrito: ()=> number
  deleteProduct:(nombre:string) => void
}
