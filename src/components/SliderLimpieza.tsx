import { useRef } from "react";
import Card from "./Card";

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

            {/* Agregamos la ref directamente al slider */}
            <div className="slider" ref={sliderRef}>
                {[...Array(10)].map((_, index) => (
                    <Card
                        key={index}
                        nombre="Kit de Limpieza"
                        precio={15000}
                        url="src/assets/img/limpieza/kitLimpieza.jpg"
                        descripcion="Kit de limpieza interno y externo"
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
