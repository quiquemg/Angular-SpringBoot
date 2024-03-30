// producto.model.ts

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  foto: string;
  descripcion: string;
  stock: number;
  tamano: number;
  peso: number;
  // Agrega más propiedades según la estructura de datos de los productos en tu backend
}