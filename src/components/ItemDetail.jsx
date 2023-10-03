import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import "./ItemDetail.css"
import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";
import Swal from "sweetalert2";

export default function ItemDetail({ producto }) {
    const [quantity, setQuantity] = useState(0)
    const [isBuyed, setIsBuyed] = useState(false)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)
        
        addItem(producto, quantity)
        Swal.fire({
            title: 'Tu seleccion fue agregada :)',
            showClass: {
            popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
            }
        })
        setIsBuyed(true)
    }

    return (
        <>
        <div className="item-detail">
            <h2>{producto.nombre}</h2>
            <img src={`/fotosProductos/${producto.imagen}`} width={125} height={100} alt="fotito"/>
            <p>{producto.categoria}</p>
            <span>$ {producto.precio}</span>
            {
                !isBuyed ? (
                    <ItemCount stock={producto.stock} onAdd={handleOnAdd}/>
                ) : (
                    <Link className="boton-finalizar-compra" to={"/cart"}>Finalizar compra</Link>
                )
            }
        </div>
        <div className="item-detail-descripcion">
            <h1> Este articulo es: </h1>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
        </div>
        </>
    );
}