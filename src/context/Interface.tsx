export interface AuthState {
  username: string;
  accessToken: string;
  refreshToken: string;
  setLogin: (name: string, password: string) => Promise<void>;
}

export interface CarritoState {
  carrito: Producto[];
  setCarrito: (producto: Producto) => void;
}

export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  cantidad: number;
}
