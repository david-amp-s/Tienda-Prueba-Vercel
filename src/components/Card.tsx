type CardProps = { 
    nombre: string; 
    precio: number; 
    url: string; 
    descripcion: string; 
};

const Card = ({ nombre, precio, url, descripcion }: CardProps) => {
    
    const precioFormateado = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    }).format(precio);

    return (
    <div className="card-item">
        <img src={url} alt={descripcion || `Imagen de ${nombre}`} className="card-img" />
        <h2 className="producto_nombre">{nombre}</h2>
        <p className="producto_precio">{precioFormateado}</p>
    </div>
    );
};

export default Card;
