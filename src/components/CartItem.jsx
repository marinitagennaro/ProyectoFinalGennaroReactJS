import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'

const CartItem = ({ item }) => {
const {totalQuantity, total, removeItem, clearCart} = useContext(CartContext)

    return (
        <>
            <div>
                <img src={`/fotosProductos/${item.imagen}`} width={80} height={80} alt="fotito"/>
                <span>{item.nombre}</span>
                <span> ${item.precio}</span>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
                <button onClick={() => clearCart()}>Eliminar todos los productos</button>
            </div>
            <div>
                <p> El total de la compra es de: $ {total}</p>
                <p>Cantidad pedida: {totalQuantity}</p>
            </div>
            <Link className="boton-finalizar-compra" to={"/checkout"}>Finalizar compra</Link>
        </>
    )
}

export default CartItem
