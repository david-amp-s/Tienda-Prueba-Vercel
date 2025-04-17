import { createContext, useContext, useEffect, useState } from "react";

export interface ProductoCarrito {
  nombre: string;
  precio: number;
  url: string;
  descripcion: string;
}

interface CarritoContextType {
  carrito: ProductoCarrito[];
  agregarProducto: (producto: ProductoCarrito) => void;
  limpiarCarrito: () => void;
}

const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

export const CarritoProvider = ({ children }: { children: React.ReactNode }) => {
  const [carrito, setCarrito] = useState<ProductoCarrito[]>([]);

  // 🔄 Este efecto carga el carrito al iniciar
  useEffect(() => {
    const stored = localStorage.getItem("carrito");
    if (stored) {
      setCarrito(JSON.parse(stored));
    }
  }, []);

  // 🧠 Este efecto escucha cambios del localStorage (si tienes varias pestañas)
  useEffect(() => {
    const handleStorageChange = () => {
      const stored = localStorage.getItem("carrito");
      if (stored) {
        setCarrito(JSON.parse(stored));
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const agregarProducto = (producto: ProductoCarrito) => {
    setCarrito((prevCarrito) => {
      const nuevoCarrito = [...prevCarrito, producto];
      localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
      return nuevoCarrito;
    });
  };

  const limpiarCarrito = () => {
    setCarrito([]);
    localStorage.setItem("carrito", JSON.stringify([]));
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarProducto, limpiarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error("useCarrito debe usarse dentro de un CarritoProvider");
  }
  return context;
};
