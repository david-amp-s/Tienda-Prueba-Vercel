const ModalCarrito = () =>{
    return(
        <div className="modal">
            
            <div className="contenedor_carrito">
            <div className="header_namePet">PARKPLACE <img  className="header_pet" src="src/assets/icons/pet.png" alt="pet" /></div>
            <button className="btn_tienda"><img className="header_carrito" src="src/assets/icons/x.png" alt="" /></button>
            </div>
            <div className="overlay_carrito">
            <h2>Carrito</h2>
            </div>
            <div className="carrito_compras">
            <div className="card_modal">
                <div className="img_producto">IMAGEN PRODUCTO</div>
                <p>Nombre producto</p>
                <div className="contenedor_cantidad">
                    <button className="btn_carrito">-</button>
                    <span className="number">0</span>
                    <button className="btn_carrito">+</button>
                </div>
            </div>
                <div className="card_modal">
                    <div className="img_producto">IMAGEN PRODUCTO</div>
                <p>Nombre producto</p>
                <div className="contenedor_cantidad">
                    <button className="btn_carrito">-</button>
                    <span className="number">0</span>
                    <button className="btn_carrito">+</button>
                </div>
            </div>
            <div className="contenedor_pago">
                <div className="total_valor_carrito">0.00</div>
                <button className="boton_pagar">pagar</button>
            </div>
            </div>
        </div>

    )
}

export default ModalCarrito;