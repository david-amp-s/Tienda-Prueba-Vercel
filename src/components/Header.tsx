
const Header = () =>{
    return(
        <div className="header">
            <div className="contenedor_petcar">
            <div className="header_namePet">PARKPLACE <img  className="header_pet" src="src/assets/icons/pet.png" alt="pet" /></div>
            <button className="btn_tienda"><img className="header_carrito" src="src/assets/icons/shopping.png" alt="" /></button>
            </div>
            <div className="overlay"></div>
            <h2>Tienda</h2>
            <div className="info_productos">Aca una pequeña socializacion de los productos</div>
        </div>
    );
}

export default Header;