import Card from "./Card";

const SliderLimpieza = () => {
return (
    <div className="contenedor_limpieza">
    <button className="contenedor_icon_button ">
        <img src="src/assets/icons/arrow.png" alt="Flecha izquierda"  className="pre-btn" />
    </button>

    <Card 
        nombre="Kit de Limpieza" 
        precio={15000} 
        url={"src/assets/img/limpieza/kitLimpieza.jpg"}  
        descripcion="Kit de limpieza interno y externo" 
    /> 

<Card 
        nombre="Kit de Limpieza" 
        precio={15000} 
        url={"src/assets/img/limpieza/kitLimpieza.jpg"}  
        descripcion="Kit de limpieza interno y externo" 
    /> 

<Card 
        nombre="Kit de Limpieza" 
        precio={15000} 
        url={"src/assets/img/limpieza/kitLimpieza.jpg"}  
        descripcion="Kit de limpieza interno y externo" 
    /> 

<Card 
        nombre="Kit de Limpieza" 
        precio={15000} 
        url={"src/assets/img/limpieza/kitLimpieza.jpg"}  
        descripcion="Kit de limpieza interno y externo" 
    /> 

    <button className="contenedor_icon_button">
        <img src="src/assets/icons/arrow.png" alt="Flecha derecha" className="nxt-btn"/>
    </button>
    </div>
);
};

export default SliderLimpieza;
