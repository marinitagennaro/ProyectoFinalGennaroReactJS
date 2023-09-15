import { Link } from "react-router-dom";
import './Item.css';

export default function Item({ producto }) {
    
    //precio final = precio - descuento

    const precioFinal = producto.precio - producto.descuento

    return (
    <div className="item">
        <div className="item-card">
        <h3>{producto.nombre}</h3>
        <img src={`/fotosProductos/${producto.imagen}`} width={125} alt="fotito"/>
        <span className={producto.descuento != 0 ? "precio-descuento" : "precio-regular"}>$ {precioFinal}</span>
        <Link to={`/detail/${producto.id}`} className="boton-detalle">Detalles</Link>
        </div>
    </div>
    );
}