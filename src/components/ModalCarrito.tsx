import { useCarrito } from "./hooks/useCarrito";

interface ModalProps {
  onClose: () => void;
}

const ModalCarrito = ({ onClose }: ModalProps) => {
  const { carrito } = useCarrito();
  const total = carrito.reduce((acc, item) => acc + item.precio, 0);

  return (
    <div className="modal">
      <div className="contenedor_carrito">
        <div className="header_namePet">
          PARKPLACE 
          <img 
            className="header_pet" 
            src="/assets/icons/pet.png" 
            alt="pet" 
          />
        </div>
        <button className="btn_tienda" onClick={onClose}>
          <img 
            className="header_carrito" 
            src="/assets/icons/x.png" 
            alt="cerrar" 
          />
        </button>
      </div>

      <div className="overlay_carrito">
        <h2>Carrito</h2>
      </div>

      <div className="carrito_compras">
        {carrito.map((producto, index) => (
          <div key={index} className="card_modal">
            <div className="img_producto">
              <img 
                className="img_carrito" 
                src={producto.url} 
                alt={producto.nombre} 
              />
            </div>
            <p>{producto.nombre}</p>
            <p>
              {new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP"
              }).format(producto.precio)}
            </p>
          </div>
        ))} 
      </div>

      <div className="contenedor_pago">
        <div className="total_valor_carrito">
          {new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP"
          }).format(total)}
        </div>
        <button
          className="boton_pagar"
          onClick={() => {
            alert("Pago realizado con éxito. Total: " + 
              new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP"
              }).format(total)
            );
            localStorage.clear();
            window.location.reload();  
          }}
        >
          Pagar
        </button>
      </div>
    </div>
  );
};

export default ModalCarrito;
