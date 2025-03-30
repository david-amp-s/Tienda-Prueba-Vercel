import { useState } from "react"

const Card = () => {
    const [comprar,setComprar] = useState(false);

    return(
        <div
        className="contenedor_carta"
        onClick={() => setComprar(true)}
        onMouseEnter={()=> setComprar(true)}
        onMouseLeave={()=>setComprar(false)}
        > 
        <img src="" alt="producto" />
        {comprar ? ( 
            <button className="boton-compra"> Click here</button>
        ): (
            <p className="texto hover">Hover or Click</p>
        )}
        </div>
    )
}

export default Card;