export interface ProductDetalle {
  images: string[]; // Un array de URLs de imágenes
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  warrantyInformation: string;
}

export interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductAdd {
  imagen: string[];
  nombre: string;
  descripcion: string;
  precio: number;
  cantidad: number;
  total: number;
}
