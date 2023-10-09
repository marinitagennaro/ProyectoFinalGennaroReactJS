import React, { useContext } from 'react'
import { CartContext } from '../context/cartContext'

const CartItem = ({ item }) => {
const { removeItem } = useContext(CartContext)

    return (
        <>
            <div>
                <img src={`/fotosProductos/${item.imagen}`} width={80} height={80} alt="fotito"/>
                <span>{item.nombre}</span>
                <span> ${item.precio}</span>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
        </>
    )
}

export default CartItem
