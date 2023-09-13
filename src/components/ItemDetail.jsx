import ItemCount from "./ItemCount";

export default function ItemDetail({ producto }) {
    return (
        <div className="item">
            <img src={producto.imagen} alt="" />
            <h2>{producto.nombre}</h2>
            <p>{producto.categoria}</p>
            <span>{producto.precio}</span>
            <ItemCount />
        </div>
    );
}