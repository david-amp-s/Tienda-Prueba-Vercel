import { useRef } from "react";
import Card from "./Card"; // Puedes reutilizar la misma Card
import { decorativo } from "../data/products";

const SliderDecorativo = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft -= 250;
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollLeft += 250;
        }
    };

    return (
        <div className="contenedor_decorativo">
            <button className="contenedor_icon_button" onClick={scrollLeft}>
                <img src="src/assets/icons/arrow.png" alt="Flecha izquierda" className="pre-btn" />
            </button>

            <div className="slider" ref={sliderRef}>
                {decorativo.map(producto => (
                    <Card
                        key={producto.id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        url={producto.imagen}
                        descripcion="" // puedes agregar descripción si lo necesitas
                    />
                ))}
            </div>
            <button className="contenedor_icon_button" onClick={scrollRight}>
                <img src="src/assets/icons/arrow.png" alt="Flecha derecha" className="nxt-btn" />
            </button>
        </div>
    );
};

export default SliderDecorativo;
