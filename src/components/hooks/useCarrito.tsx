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
    try {
      const stored = localStorage.getItem(CARRITO_KEY);
      if (stored) {
        setCarrito(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Error al leer el carrito del localStorage:", error);
      setCarrito([]);
    }
  }, []);
  

  const guardarCarrito = (nuevoCarrito: ProductoCarrito[]) => {
    setCarrito(() => {
      localStorage.setItem(CARRITO_KEY, JSON.stringify(nuevoCarrito));
      return nuevoCarrito;
    });
  };
  

  const agregarProducto = (producto: ProductoCarrito) => {
    setCarrito((prevCarrito) => {
      const nuevoCarrito = [...prevCarrito, producto];
      localStorage.setItem(CARRITO_KEY, JSON.stringify(nuevoCarrito));
      return nuevoCarrito;
    });
  };
  
  
  const limpiarCarrito = () => {
    guardarCarrito([]);
  };

  return { carrito, agregarProducto, limpiarCarrito };
}
