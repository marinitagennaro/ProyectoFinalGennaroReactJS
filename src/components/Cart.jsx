import { useContext, useState } from 'react'
import { CartContext } from '../context/cartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem';
import './ItemListContainer.css';

const Cart = () => {
    const { cart, clearCart, total, totalQuantity } = useContext(CartContext)

return (
    <div>
        {
            cart.length === 0 ? (
                <div>
                <h1>El carrito aún está vacio</h1>
                <Link className='boton-de-volver' to="/">Volver</Link>
                </div>
            ) :     
                <div className="item-cart">
                    {
                        cart.map(item => (
                            <CartItem key={item.id} item={item}/>
                        ))
                    }
                        <button onClick={() => clearCart()}>Eliminar todos los productos</button>
                        <p>Cantidad de productos: {totalQuantity}</p>
                        <p> El total de la compra es de: $ {total}</p>
                        <Link className="boton-finalizar-compra" to={"/checkout"}>Finalizar compra</Link>
                </div>
        }
    </div>
)
}

export default Cart
