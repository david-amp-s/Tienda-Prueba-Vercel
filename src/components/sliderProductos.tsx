import { useRef } from "react";
import Card from "./Card"; // Puedes reutilizar la misma Card

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
                {[...Array(8)].map((_, index) => (
                    <Card
                        key={index}
                        nombre="Producto Decorativo"
                        precio={12000}
                        url="src/assets/img/decorativos/ambientador.png"
                        descripcion="Haz que tu auto huela increíble"
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
