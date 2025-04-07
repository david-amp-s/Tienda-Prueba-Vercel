import { useCarrito } from "./hooks/useCarrito";

type CardProps = {
  nombre: string;
  precio: number;
  url: string;
  descripcion: string;
};

const Card = ({ nombre, precio, url, descripcion }: CardProps) => {
  const { agregarProducto } = useCarrito();

  const precioFormateado = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
  }).format(precio);

  const agregarAlCarrito = () => {
    agregarProducto({ nombre, precio, url, descripcion });
  };

  return (
    <div className="card-item">
      <div className="card-contenido">
        <img src={url} alt={descripcion} className="card-img" />
        <h2 className="producto_nombre">{nombre}</h2>
        <p className="producto_precio">{precioFormateado}</p>
      </div>
      <button className="bton_card buy" onClick={agregarAlCarrito}>agregar al carrito</button>
    </div>
  );
};

export default Card;
