import ItemCount from "./ItemCount";
import "./Item.css"

export default function ItemDetail({ producto }) {
    return (
        <div className="item-detail">
            <h2>{producto.nombre}</h2>
            <img src={`/fotosProductos/${producto.imagen}`} width={125} alt="fotito"/>
            <p>{producto.categoria}</p>
            <span>$ {producto.precio}</span>
            <ItemCount />
        </div>
    );
}