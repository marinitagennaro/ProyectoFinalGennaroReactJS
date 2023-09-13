import { useNavigate } from "react-router-dom";

export default function Item({ producto }) {
    
    //precio final = precio - descuento

    const precioFinal = producto.precio - producto.descuento
    const navigate = useNavigate()

    return (
    <div className="item">
        <img src={`/fotosProductos/${producto.imagen}`} width={125} alt="fotito"></img>
        <h3>{producto.nombre}</h3>
        <span className={producto.descuento != 0 ? "precio-descuento" : "precio-regular"}>{precioFinal}</span>
        <button onClick={() => navigate(`${producto.id}`)}>Ver Detalles</button>
    </div>
    );
}