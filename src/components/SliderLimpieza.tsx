import { useRef } from "react";
import Card from "./Card";
import { limpieza } from "../data/products";

const SliderLimpieza = () => {
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
        <div className="contenedor_limpieza">
            <button className="contenedor_icon_button" onClick={scrollLeft}>
                <img src="src/assets/icons/arrow.png" alt="Flecha izquierda" className="pre-btn" />
            </button>

            <div className="slider" ref={sliderRef}>
                {limpieza.map(producto => (
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

export default SliderLimpieza;
