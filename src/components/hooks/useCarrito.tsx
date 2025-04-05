// src/hooks/useCarrito.ts
import { useState, useEffect } from "react";

export interface ProductoCarrito {
  nombre: string;
  precio: number;
  url: string;
  descripcion: string;
}

const CARRITO_KEY = "carrito";

export function useCarrito() {
  const [carrito, setCarrito] = useState<ProductoCarrito[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(CARRITO_KEY);
    if (stored) {
      setCarrito(JSON.parse(stored));
    }
  }, []);

  const guardarCarrito = (nuevoCarrito: ProductoCarrito[]) => {
    setCarrito(nuevoCarrito);
    localStorage.setItem(CARRITO_KEY, JSON.stringify(nuevoCarrito));
  };

  const agregarProducto = (producto: ProductoCarrito) => {
    const nuevoCarrito = [...carrito, producto];
    guardarCarrito(nuevoCarrito);
  };

  const limpiarCarrito = () => {
    guardarCarrito([]);
  };

  return { carrito, agregarProducto, limpiarCarrito };
}
