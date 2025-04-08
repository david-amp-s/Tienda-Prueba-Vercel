import { useState } from "react";
import ModalCarrito from "./ModalCarrito";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="header">
            <div className="contenedor_petcar">
                <div className="header_namePet">
                    PARKPLACE 
                    <img 
                        className="header_pet" 
                        src="/assets/icons/pet.png" 
                        alt="pet" 
                    />
                </div>
                <button className="btn_tienda" onClick={() => setIsOpen(true)}>
                    <img 
                        className="header_carrito" 
                        src="/assets/icons/shopping.png" 
                        alt="carrito" 
                    />
                </button>
            </div>
            <div className="overlay">
                <h2>Tienda</h2>
            </div>
            <div className="info_productos">
                Explora nuestros productos y mejora la experiencia de tu vehículo 🚗✨
            </div>
            {isOpen && <ModalCarrito onClose={() => setIsOpen(false)} />}
        </div>
    );
};

export default Header;
